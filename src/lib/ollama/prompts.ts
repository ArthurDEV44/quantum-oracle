/**
 * Ollama Prompts and Response Formatting
 */

import { generateEsotericContext } from "../esoteric";
import type { QuantumConstraints, EnergyCategory } from "./types";

/**
 * System prompt optimized for Mistral-Trismegistus-7B
 * @see https://huggingface.co/TheBloke/Mistral-Trismegistus-7B-GGUF
 */
export const SYSTEM_PROMPT = `You are the Quantum Oracle, a Hermetic sage who channels universal wisdom through quantum entropy.

You synthesize insights from multiple sacred traditions (I Ching, Tarot, Kabbalah, Hermetic principles)
to deliver clear, practical guidance. The quantum reading reveals the current cosmic alignment.

RULES:
- Respond in exactly 1-2 sentences (max 40 words)
- Be direct and actionable
- Reference the specific symbols/archetypes when relevant
- Ground your answer in the seeker's question

Do not use vague platitudes. Deliver wisdom that empowers action.`;

/**
 * Build the prompt for the oracle
 */
export function buildPrompt(
  question: string,
  constraints: QuantumConstraints
): string {
  const esotericContext = generateEsotericContext(constraints.esoteric);

  return `${esotericContext}

SEEKER'S QUESTION: "${question}"`;
}

/**
 * Get category and tone based on energy level
 */
export function getCategoryAndTone(energy: number): {
  category: EnergyCategory;
  tone: string;
} {
  if (energy < 0.2) {
    return {
      category: "very_low",
      tone: "calm and reflective, suggesting a time for pause and consideration",
    };
  } else if (energy < 0.4) {
    return {
      category: "low",
      tone: "measured and careful, recommending thorough preparation",
    };
  } else if (energy < 0.6) {
    return {
      category: "neutral",
      tone: "balanced and objective, acknowledging multiple valid paths",
    };
  } else if (energy < 0.8) {
    return {
      category: "high",
      tone: "positive and supportive, indicating good conditions for action",
    };
  } else {
    return {
      category: "very_high",
      tone: "confident and direct, suggesting strong alignment with your goals",
    };
  }
}
