import { db } from "@/db";
import { consultations } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

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
