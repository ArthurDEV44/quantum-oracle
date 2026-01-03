import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import {
  getQuantumRandomNumbers,
  interpretQuantumResponse,
} from "@/lib/qrng";
import { getOrCreateUser } from "@/lib/user";
import { saveConsultation, canConsultToday, FREE_DAILY_LIMIT } from "@/lib/consultations";

export async function POST(request: Request) {
  try {
    const { userId: clerkId } = await auth();

    if (!clerkId) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const user = await currentUser();
    if (!user?.emailAddresses?.[0]?.emailAddress) {
      return NextResponse.json({ error: "Email requis" }, { status: 400 });
    }

    const body = await request.json();
    const { question } = body;

    if (!question || typeof question !== "string") {
      return NextResponse.json(
        { error: "Question requise" },
        { status: 400 }
      );
    }

    if (question.length > 500) {
      return NextResponse.json(
        { error: "Question trop longue (max 500 caractères)" },
        { status: 400 }
      );
    }

    // Get or create user in database
    const dbUser = await getOrCreateUser(
      clerkId,
      user.emailAddresses[0].emailAddress
    );

    // Check daily limit
    const { allowed, remaining } = await canConsultToday(dbUser.id);
    if (!allowed) {
      return NextResponse.json(
        {
          error: `Limite quotidienne atteinte (${FREE_DAILY_LIMIT} consultations/jour)`,
          code: "DAILY_LIMIT_REACHED",
          remaining: 0,
        },
        { status: 429 }
      );
    }

    // Get quantum random numbers
    const quantumResult = await getQuantumRandomNumbers(8);
    const response = interpretQuantumResponse(quantumResult.numbers);

    // Save consultation to database
    const consultation = await saveConsultation(
      dbUser.id,
      question,
      response,
      JSON.stringify(quantumResult)
    );

    return NextResponse.json({
      id: consultation.id,
      question,
      response,
      quantumData: {
        numbers: quantumResult.numbers,
        timestamp: quantumResult.timestamp,
        source: quantumResult.source,
      },
      createdAt: consultation.createdAt,
      remaining: remaining - 1,
    });
  } catch (error) {
    console.error("Consultation error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la consultation" },
      { status: 500 }
    );
  }
}
