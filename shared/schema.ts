import { pgTable, text, serial, integer, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const testSessions = pgTable("test_sessions", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull().unique(),
  answers: json("answers").$type<number[]>().notNull(),
  resultType: text("result_type").notNull(),
  completedAt: text("completed_at").notNull(),
});

export const insertTestSessionSchema = createInsertSchema(testSessions).omit({
  id: true,
});

export type InsertTestSession = z.infer<typeof insertTestSessionSchema>;
export type TestSession = typeof testSessions.$inferSelect;

// Question and Option types
export interface Question {
  id: number;
  question: string;
  options: QuestionOption[];
}

export interface QuestionOption {
  text: string;
  type: "TE" | "EG";
  weight: number;
}

// Personality type definitions
export interface PersonalityType {
  code: string;
  name: string;
  subtitle: string;
  icon: string;
  traits: string[];
  description: string;
  analysis: AnalysisItem[];
  attractedTo?: AttractionInfo;
}

export interface AttractionInfo {
  type: string;
  name: string;
  description: string;
}

export interface AnalysisItem {
  label: string;
  value: number;
}

// Test result calculation
export interface TestScores {
  TE: number;
  EG: number;
}
