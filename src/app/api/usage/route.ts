import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { getUserByClerkId } from "@/lib/user";
import { canConsultToday, FREE_DAILY_LIMIT } from "@/lib/consultations";

export async function GET() {
  try {
    const { userId: clerkId } = await auth();

    if (!clerkId) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const dbUser = await getUserByClerkId(clerkId);

    if (!dbUser) {
      return NextResponse.json({
        remaining: FREE_DAILY_LIMIT,
        used: 0,
        limit: FREE_DAILY_LIMIT,
      });
    }

    const { remaining, used } = await canConsultToday(dbUser.id);

    return NextResponse.json({
      remaining,
      used,
      limit: FREE_DAILY_LIMIT,
    });
  } catch (error) {
    console.error("Usage error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération" },
      { status: 500 }
    );
  }
}
