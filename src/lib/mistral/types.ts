/**
 * Mistral API Type Definitions
 */

// Re-export shared types from ollama
export type {
  QuantumConstraints,
  OracleResponse,
  EnergyCategory,
  QuantumEsotericReading,
} from "../ollama/types";

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
