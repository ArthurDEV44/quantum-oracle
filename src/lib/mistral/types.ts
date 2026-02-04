/**
 * Mistral API Type Definitions
 */

import type { QuantumEsotericReading } from "../esoteric";

// Re-export for convenience
export type { QuantumEsotericReading } from "../esoteric";

export type EnergyCategory =
  | "very_low"
  | "low"
  | "neutral"
  | "high"
  | "very_high";

export interface QuantumConstraints {
  energy: number;
  category: EnergyCategory;
  tone: string;
  temperature: number;
  seed: number;
  esoteric: QuantumEsotericReading;
}

export interface OracleResponse {
  text: string;
  model: string;
  constraints: QuantumConstraints;
}

export interface MistralMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface MistralChatRequest {
  model: string;
  messages: MistralMessage[];
  temperature?: number;
  max_tokens?: number;
  top_p?: number;
  random_seed?: number;
}

export interface MistralChatResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface MistralError {
  message: string;
  type: string;
  code?: string;
}
