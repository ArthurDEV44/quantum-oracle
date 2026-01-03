import { db } from "@/db";
import { consultations } from "@/db/schema";
import { eq, desc, and, gte } from "drizzle-orm";

export const FREE_DAILY_LIMIT = 3;

export async function getTodayConsultationCount(userId: string): Promise<number> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const results = await db
    .select()
    .from(consultations)
    .where(
      and(
        eq(consultations.userId, userId),
        gte(consultations.createdAt, today)
      )
    );

  return results.length;
}

export async function canConsultToday(userId: string): Promise<{
  allowed: boolean;
  remaining: number;
  used: number;
}> {
  const used = await getTodayConsultationCount(userId);
  const remaining = Math.max(0, FREE_DAILY_LIMIT - used);

  return {
    allowed: used < FREE_DAILY_LIMIT,
    remaining,
    used,
  };
}

export async function saveConsultation(
  userId: string,
  question: string,
  response: string,
  quantumData: string
) {
  const consultation = await db
    .insert(consultations)
    .values({
      userId,
      question,
      response,
      quantumData,
    })
    .returning();

  return consultation[0];
}

export async function getUserConsultations(userId: string, limit: number = 20) {
  const results = await db
    .select()
    .from(consultations)
    .where(eq(consultations.userId, userId))
    .orderBy(desc(consultations.createdAt))
    .limit(limit);

  return results;
}
