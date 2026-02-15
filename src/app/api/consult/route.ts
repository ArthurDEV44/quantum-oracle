import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import {
  getQuantumRandomNumbers,
  interpretQuantumResponse,
} from "@/lib/qrng";
import {
  generateMistralResponse,
  isMistralConfigured,
  type QuantumConstraints,
} from "@/lib/mistral";
import { getReadingCorrespondences } from "@/lib/esoteric-lookup";
import { getOrCreateUser } from "@/lib/user";
import { saveConsultation } from "@/lib/consultations";

// Configuration
const CONFIG = {
  requestTimeout: 45000, // 45s max for entire request
  maxQuestionLength: 500,
  minQuestionLength: 3,
  quantumBytes: 16,
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
  generatedBy: "mistral" | "fallback";
  constraints?: QuantumConstraints;
}

async function generateResponse(
  question: string,
  numbers: number[]
): Promise<ResponseData> {
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
        console.warn("Mistral generation failed, using fallback:", error);
      }
    }
  }

  // Fallback when Mistral is not configured or fails
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

    // Generate response (Mistral or fallback)
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
    const correspondences = esoteric
      ? getReadingCorrespondences(esoteric)
      : undefined;

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
        variance: esoteric?.quantum?.variance,
      },
      esotericReading: esoteric
        ? {
            iChing: {
              hexagram: esoteric.iChing.hexagramNumber,
              name: esoteric.iChing.hexagramName,
              symbol: esoteric.iChing.hexagramSymbol,
              meaning: esoteric.iChing.meaning,
              upperTrigram: {
                name: esoteric.iChing.upperTrigram.name,
                symbol: esoteric.iChing.upperTrigram.symbol,
                element: esoteric.iChing.upperTrigram.element,
              },
              lowerTrigram: {
                name: esoteric.iChing.lowerTrigram.name,
                symbol: esoteric.iChing.lowerTrigram.symbol,
                element: esoteric.iChing.lowerTrigram.element,
              },
              mutatingLines: esoteric.iChing.mutatingLines,
              transformedHexagram: esoteric.iChing.transformedHexagramNumber,
              transformedHexagramName: esoteric.iChing.transformedHexagramName,
              transformedHexagramSymbol: esoteric.iChing.transformedHexagramSymbol,
            },
            tarot: {
              arcana: esoteric.tarot.arcanaNumber,
              name: esoteric.tarot.arcanaName,
              symbol: esoteric.tarot.arcanaSymbol,
              keywords: esoteric.tarot.keywords,
              meaning: esoteric.tarot.meaning,
            },
            kabbalah: {
              sefirah: esoteric.kabbalah.sefirahNumber,
              name: esoteric.kabbalah.sefirahName,
              hebrew: esoteric.kabbalah.sefirahHebrew,
              attribute: esoteric.kabbalah.attribute,
              meaning: esoteric.kabbalah.meaning,
              pathNumber: esoteric.kabbalah.pathNumber,
              pathLetterName: esoteric.kabbalah.pathLetterName,
              pathMeaning: esoteric.kabbalah.pathMeaning,
            },
            hermetic: {
              principle: esoteric.hermetic.principleNumber,
              name: esoteric.hermetic.principleName,
              axiom: esoteric.hermetic.axiom,
              meaning: esoteric.hermetic.meaning,
            },
            elements: {
              dominant: esoteric.elements.dominant,
              balance: esoteric.elements.balance,
              distribution: esoteric.elements.distribution,
            },
            sacredGeometry: {
              phiResonance: esoteric.sacredGeometry.phiResonance,
              harmonicFrequency: esoteric.sacredGeometry.harmonicFrequency,
              fibonacciAlignment: esoteric.sacredGeometry.fibonacciAlignment,
            },
            synthesis: esoteric.synthesis,
            ifa: {
              odu: esoteric.ifa.oduNumber,
              name: esoteric.ifa.oduName,
              meaning: esoteric.ifa.meaning,
              proverb: esoteric.ifa.proverb,
              orisha: esoteric.ifa.orisha,
              element: esoteric.ifa.element,
            },
            geomancy: {
              figure1: esoteric.geomancy.figure1Name,
              figure2: esoteric.geomancy.figure2Name,
              judge: esoteric.geomancy.judgeName,
              element: esoteric.geomancy.element,
              planet: esoteric.geomancy.planet,
              figure1Number: esoteric.geomancy.figure1Number,
              figure2Number: esoteric.geomancy.figure2Number,
              judgeNumber: esoteric.geomancy.judgeNumber,
            },
            runes: {
              rune: esoteric.runes.runeNumber,
              name: esoteric.runes.runeName,
              glyph: esoteric.runes.runeGlyph,
              meaning: esoteric.runes.meaning,
              orientation: esoteric.runes.orientation,
              aett: esoteric.runes.aettNumber,
              element: esoteric.runes.element,
              deity: esoteric.runes.deity,
            },
            alchemy: {
              stage: esoteric.alchemy.stageName,
              stageLatin: esoteric.alchemy.stageLatin,
              stageColor: esoteric.alchemy.stageColor,
              operation: esoteric.alchemy.operationName,
              operationLatin: esoteric.alchemy.operationLatin,
              planet: esoteric.alchemy.planet,
            },
            chakras: {
              chakra: esoteric.chakras.chakraNumber,
              name: esoteric.chakras.chakraNameSanskrit,
              nameFrench: esoteric.chakras.chakraNameFrench,
              frequency: esoteric.chakras.solfegeFrequencyHz,
              mantra: esoteric.chakras.mantra,
              color: esoteric.chakras.color,
              element: esoteric.chakras.element,
            },
            gematria: {
              value: esoteric.gematria.value,
              sacredWord: esoteric.gematria.sacredWord,
              letters: esoteric.gematria.letters,
            },
            correspondences,
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
