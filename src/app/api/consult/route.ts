import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import {
  getQuantumRandomNumbers,
  interpretQuantumResponse,
} from "@/lib/qrng";

export async function POST(request: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const body = await request.json();
    const { question } = body;

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "Question requise" },
        { status: 400 }
      );
    }

    const quantumResult = await getQuantumRandomNumbers(8);
    const response = interpretQuantumResponse(quantumResult.numbers, question);

    return NextResponse.json({
      question,
      response,
      quantumData: {
        numbers: quantumResult.numbers,
        timestamp: quantumResult.timestamp,
        source: quantumResult.source,
      },
    });
  } catch (error) {
    console.error("Consultation error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la consultation" },
      { status: 500 }
    );
  }
}
