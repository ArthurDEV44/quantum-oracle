import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { getUserByClerkId } from "@/lib/user";
import { getUserConsultations } from "@/lib/consultations";

export async function GET() {
  try {
    const { userId: clerkId } = await auth();

    if (!clerkId) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const dbUser = await getUserByClerkId(clerkId);

    if (!dbUser) {
      return NextResponse.json({ consultations: [] });
    }

    const consultations = await getUserConsultations(dbUser.id, 50);

    return NextResponse.json({
      consultations: consultations.map((c) => ({
        id: c.id,
        question: c.question,
        response: c.response,
        createdAt: c.createdAt,
      })),
    });
  } catch (error) {
    console.error("History error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération de l'historique" },
      { status: 500 }
    );
  }
}
