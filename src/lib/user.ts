import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getOrCreateUser(clerkId: string, email: string) {
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.clerkId, clerkId))
    .limit(1);

  if (existingUser.length > 0) {
    return existingUser[0];
  }

  const newUser = await db
    .insert(users)
    .values({
      clerkId,
      email,
    })
    .returning();

  return newUser[0];
}

export async function getUserByClerkId(clerkId: string) {
  const user = await db
    .select()
    .from(users)
    .where(eq(users.clerkId, clerkId))
    .limit(1);

  return user[0] || null;
}
