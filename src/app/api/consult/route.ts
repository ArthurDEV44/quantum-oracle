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
import { getOrCreateUser } from "@/lib/user";
import { saveConsultation } from "@/lib/consultations";

interface ResponseData {
  response: string;
  generatedBy: "ollama" | "fallback";
  constraints?: QuantumConstraints;
}

async function generateResponse(
  question: string,
  numbers: number[]
): Promise<ResponseData> {
  // Try Ollama first
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
      console.warn("Ollama generation failed, using fallback:", error);
    }
  } else {
    console.info("Ollama not available, using fallback responses", health);
  }

  // Fallback to hardcoded responses
  return {
    response: interpretQuantumResponse(numbers),
    generatedBy: "fallback",
  };
}

export async function POST(request: Request) {
  try {
    const { userId: clerkId } = await auth();

    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await currentUser();
    if (!user?.emailAddresses?.[0]?.emailAddress) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const body = await request.json();
    const { question } = body;

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "Question required" },
        { status: 400 }
      );
    }

    if (question.length > 500) {
      return NextResponse.json(
        { error: "Question too long (max 500 characters)" },
        { status: 400 }
      );
    }

    // Get or create user in database
    const dbUser = await getOrCreateUser(
      clerkId,
      user.emailAddresses[0].emailAddress
    );

    // Get quantum random numbers
    const quantumResult = await getQuantumRandomNumbers(8);

    // Generate response (Ollama or fallback)
    const { response, generatedBy, constraints } = await generateResponse(
      question,
      quantumResult.numbers
    );

    // Save consultation to database
    const consultation = await saveConsultation(
      dbUser.id,
      question,
      response,
      JSON.stringify({
        ...quantumResult,
        generatedBy,
        constraints,
      })
    );

    return NextResponse.json({
      id: consultation.id,
      question,
      response,
      quantumData: {
        numbers: quantumResult.numbers,
        timestamp: quantumResult.timestamp,
        source: quantumResult.source,
        generatedBy,
        energy: constraints?.energy,
        category: constraints?.category,
      },
      createdAt: consultation.createdAt,
    });
  } catch (error) {
    console.error("Consultation error:", error);
    return NextResponse.json(
      { error: "Consultation error" },
      { status: 500 }
    );
  }
}
