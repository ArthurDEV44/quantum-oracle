import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import {
  getQuantumRandomNumbers,
  interpretQuantumResponse,
} from "@/lib/qrng";
import {
  generateOracleResponse,
  checkOllamaHealth,
  type QuantumConstraints,
} from "@/lib/ollama";
import {
  generateMistralResponse,
  isMistralConfigured,
} from "@/lib/mistral";
import { getOrCreateUser } from "@/lib/user";
import { saveConsultation } from "@/lib/consultations";

// Configuration
const CONFIG = {
  requestTimeout: 45000, // 45s max for entire request
  maxQuestionLength: 500,
  minQuestionLength: 3,
  quantumBytes: 8,
};

const isDev = process.env.NODE_ENV === "development";

// Error types for better error handling
type ErrorCode =
  | "UNAUTHORIZED"
  | "EMAIL_REQUIRED"
  | "INVALID_QUESTION"
  | "QUESTION_TOO_SHORT"
  | "QUESTION_TOO_LONG"
  | "TIMEOUT"
  | "INTERNAL_ERROR";

interface ApiError {
  error: string;
  code: ErrorCode;
  details?: string;
}

function createErrorResponse(
  code: ErrorCode,
  message: string,
  status: number,
  details?: string
): NextResponse<ApiError> {
  return NextResponse.json(
    { error: message, code, ...(isDev && details ? { details } : {}) },
    { status }
  );
}

interface ResponseData {
  response: string;
  generatedBy: "mistral" | "ollama" | "fallback";
  constraints?: QuantumConstraints;
}

async function generateResponse(
  question: string,
  numbers: number[]
): Promise<ResponseData> {
  // Priority 1: Mistral API (production/cloud)
  if (isMistralConfigured()) {
    try {
      const mistralResponse = await generateMistralResponse(question, numbers);
      return {
        response: mistralResponse.text,
        generatedBy: "mistral",
        constraints: mistralResponse.constraints,
      };
    } catch (error) {
      if (isDev) {
        console.warn("Mistral generation failed, trying Ollama:", error);
      }
    }
  }

  // Priority 2: Ollama (local development)
  const health = await checkOllamaHealth();

  if (health.available && health.modelLoaded) {
    try {
      const oracleResponse = await generateOracleResponse(question, numbers);
      return {
        response: oracleResponse.text,
        generatedBy: "ollama",
        constraints: oracleResponse.constraints,
      };
    } catch (error) {
      if (isDev) {
        console.warn("Ollama generation failed, using fallback:", error);
      }
    }
  } else if (isDev) {
    console.info("Ollama not available, using fallback responses", health);
  }

  // Priority 3: Hardcoded fallback
  return {
    response: interpretQuantumResponse(numbers),
    generatedBy: "fallback",
  };
}

export async function POST(request: Request) {
  // Create timeout for entire request
  const timeoutController = new AbortController();
  const timeoutId = setTimeout(
    () => timeoutController.abort(),
    CONFIG.requestTimeout
  );

  try {
    // Run auth() and body parsing in parallel (both are independent)
    const [authResult, body] = await Promise.all([
      auth(),
      request.json().catch(() => null),
    ]);

    const { userId: clerkId } = authResult;

    if (!clerkId) {
      return createErrorResponse("UNAUTHORIZED", "Unauthorized", 401);
    }

    // Validate request body
    if (!body || typeof body !== "object") {
      return createErrorResponse("INVALID_QUESTION", "Invalid request body", 400);
    }

    const { question } = body;

    // Input validation
    if (!question || typeof question !== "string") {
      return createErrorResponse(
        "INVALID_QUESTION",
        "Question is required and must be a string",
        400
      );
    }

    const trimmedQuestion = question.trim();

    if (trimmedQuestion.length < CONFIG.minQuestionLength) {
      return createErrorResponse(
        "QUESTION_TOO_SHORT",
        `Question too short (min ${CONFIG.minQuestionLength} characters)`,
        400
      );
    }

    if (trimmedQuestion.length > CONFIG.maxQuestionLength) {
      return createErrorResponse(
        "QUESTION_TOO_LONG",
        `Question too long (max ${CONFIG.maxQuestionLength} characters)`,
        400
      );
    }

    // Get current user (needed for email)
    const user = await currentUser();
    if (!user?.emailAddresses?.[0]?.emailAddress) {
      return createErrorResponse("EMAIL_REQUIRED", "Email required", 400);
    }

    // Run independent operations in parallel:
    // - Get or create user in database
    // - Get quantum random numbers
    const [dbUser, quantumResult] = await Promise.all([
      getOrCreateUser(clerkId, user.emailAddresses[0].emailAddress),
      getQuantumRandomNumbers(CONFIG.quantumBytes),
    ]);

    // Generate response (Ollama or fallback)
    const { response, generatedBy, constraints } = await generateResponse(
      trimmedQuestion,
      quantumResult.numbers
    );

    // Save consultation to database
    const consultation = await saveConsultation(
      dbUser.id,
      trimmedQuestion,
      response,
      JSON.stringify({
        ...quantumResult,
        generatedBy,
        constraints,
      })
    );

    // Build esoteric summary for response
    const esoteric = constraints?.esoteric;

    return NextResponse.json({
      id: consultation.id,
      question: trimmedQuestion,
      response,
      quantumData: {
        numbers: quantumResult.numbers,
        timestamp: quantumResult.timestamp,
        source: quantumResult.source,
        generatedBy,
        energy: constraints?.energy,
        category: constraints?.category,
      },
      esotericReading: esoteric
        ? {
            iChing: {
              hexagram: esoteric.iChing.hexagramNumber,
              name: esoteric.iChing.hexagramName,
              symbol: esoteric.iChing.hexagramSymbol,
              meaning: esoteric.iChing.meaning,
            },
            tarot: {
              arcana: esoteric.tarot.arcanaNumber,
              name: esoteric.tarot.arcanaName,
              symbol: esoteric.tarot.arcanaSymbol,
              keywords: esoteric.tarot.keywords,
            },
            kabbalah: {
              sefirah: esoteric.kabbalah.sefirahNumber,
              name: esoteric.kabbalah.sefirahName,
              hebrew: esoteric.kabbalah.sefirahHebrew,
              attribute: esoteric.kabbalah.attribute,
            },
            hermetic: {
              principle: esoteric.hermetic.principleNumber,
              name: esoteric.hermetic.principleName,
              axiom: esoteric.hermetic.axiom,
            },
            elements: {
              dominant: esoteric.elements.dominant,
              balance: esoteric.elements.balance,
            },
            sacredGeometry: {
              phiResonance: esoteric.sacredGeometry.phiResonance,
              harmonicFrequency: esoteric.sacredGeometry.harmonicFrequency,
            },
            synthesis: esoteric.synthesis,
          }
        : undefined,
      createdAt: consultation.createdAt,
    });
  } catch (error) {
    // Check if it's a timeout
    if (timeoutController.signal.aborted) {
      return createErrorResponse("TIMEOUT", "Request timeout", 504);
    }

    if (isDev) {
      console.error("Consultation error:", error);
    }

    const message = error instanceof Error ? error.message : "Unknown error";
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Consultation failed",
      500,
      message
    );
  } finally {
    clearTimeout(timeoutId);
  }
}
