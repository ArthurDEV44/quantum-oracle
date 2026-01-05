import {
  pgTable,
  text,
  timestamp,
  uuid,
  integer,
  pgEnum,
} from "drizzle-orm/pg-core";

export const subscriptionTierEnum = pgEnum("subscription_tier", [
  "free",
  "seeker",
  "oracle",
]);

export const subscriptionStatusEnum = pgEnum("subscription_status", [
  "active",
  "canceled",
  "past_due",
  "trialing",
]);

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  clerkId: text("clerk_id").notNull().unique(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const subscriptions = pgTable("subscriptions", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  tier: subscriptionTierEnum("tier").default("free").notNull(),
  status: subscriptionStatusEnum("status").default("active").notNull(),
  currentPeriodEnd: timestamp("current_period_end"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const consultations = pgTable("consultations", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  question: text("question").notNull(),
  response: text("response").notNull(),
  quantumData: text("quantum_data"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const dailyUsage = pgTable("daily_usage", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),
  date: timestamp("date").notNull(),
  consultationCount: integer("consultation_count").default(0).notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Subscription = typeof subscriptions.$inferSelect;
export type Consultation = typeof consultations.$inferSelect;
export type NewConsultation = typeof consultations.$inferInsert;
