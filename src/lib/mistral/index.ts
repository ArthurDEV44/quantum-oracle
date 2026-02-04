/**
 * Mistral API Integration for Quantum Oracle
 *
 * Uses Mistral Small for generating esoteric oracle responses.
 */

import { calculateEsotericReading } from "../esoteric";
import {
  MISTRAL_API_KEY,
  MISTRAL_API_URL,
  MODEL_NAME,
  CONFIG,
  isDev,
  isMistralConfigured,
} from "./config";
import { SYSTEM_PROMPT, buildUserPrompt, getCategoryAndTone } from "./prompts";
import type {
  MistralChatRequest,
  MistralChatResponse,
  MistralError,
  OracleResponse,
  QuantumConstraints,
} from "./types";

// Re-exports
export type { QuantumConstraints, OracleResponse, EnergyCategory } from "./types";
export { isMistralConfigured } from "./config";

/**
 * Derive quantum constraints from raw quantum numbers
 */
export function deriveQuantumConstraints(
  numbers: number[]
): QuantumConstraints {
  const esoteric = calculateEsotericReading(numbers);
  const energy = esoteric.synthesis.energy;
  const variance = esoteric.quantum.variance;
  const temperature = 0.3 + variance * 2.4;
  const { category, tone } = getCategoryAndTone(energy);

  return {
    energy,
    category,
    tone,
    temperature: Math.min(0.9, Math.max(0.3, temperature)),
    seed: numbers[0],
    esoteric,
  };
}

/**
 * Retry with exponential backoff + jitter
 */
async function withRetry<T>(
  fn: () => Promise<T>,
  retries: number = CONFIG.maxRetries
): Promise<T> {
  let lastError: Error | undefined;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      if (attempt < retries) {
        const baseDelay = CONFIG.retryDelayMs * Math.pow(2, attempt);
        const jitterMultiplier =
          1 - CONFIG.retryJitter + Math.random() * CONFIG.retryJitter * 2;
        const delay = Math.floor(baseDelay * jitterMultiplier);

        if (isDev) {
          console.log(`Mistral retry ${attempt + 1}/${retries} in ${delay}ms`);
        }
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError;
}

/**
 * Clean up the LLM response
 */
function cleanResponse(text: string): string {
  if (!text) {
    if (isDev) {
      console.warn("Mistral returned empty response");
    }
    return "";
  }

  const cleaned = text
    .trim()
    .replace(/^(ASSISTANT:|Oracle:|Response:|Réponse:)\s*/i, "")
    .replace(/^[\d-]+\s*[Pp]hrase[s]?\s*:\s*/i, "")
    .replace(/^\*\*?[^*]+\*\*?:\s*/i, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return cleaned;
}

/**
 * Generate oracle response using Mistral API
 */
export async function generateMistralResponse(
  question: string,
  numbers: number[]
): Promise<OracleResponse> {
  if (!isMistralConfigured()) {
    throw new Error("Mistral API key not configured");
  }

  const constraints = deriveQuantumConstraints(numbers);
  const userPrompt = buildUserPrompt(question, constraints);

  const requestBody: MistralChatRequest = {
    model: MODEL_NAME,
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "user", content: userPrompt },
    ],
    temperature: constraints.temperature,
    max_tokens: CONFIG.maxTokens,
    top_p: CONFIG.topP,
    random_seed: constraints.seed,
  };

  const result = await withRetry(async () => {
    const response = await fetch(`${MISTRAL_API_URL}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${MISTRAL_API_KEY}`,
      },
      body: JSON.stringify(requestBody),
      signal: AbortSignal.timeout(CONFIG.generateTimeout),
    });

    if (!response.ok) {
      const errorData = (await response.json().catch(() => ({}))) as {
        error?: MistralError;
      };
      const errorMessage =
        errorData.error?.message || `HTTP ${response.status}`;
      throw new Error(`Mistral API error: ${errorMessage}`);
    }

    return response.json() as Promise<MistralChatResponse>;
  });

  const content = result.choices[0]?.message?.content || "";

  if (isDev) {
    console.log("Mistral usage:", {
      model: result.model,
      promptTokens: result.usage.prompt_tokens,
      completionTokens: result.usage.completion_tokens,
      totalTokens: result.usage.total_tokens,
    });
  }

  return {
    text: cleanResponse(content),
    model: result.model,
    constraints,
  };
}

/**
 * Check if Mistral API is reachable
 */
export async function checkMistralHealth(): Promise<{
  available: boolean;
  error?: string;
}> {
  if (!isMistralConfigured()) {
    return { available: false, error: "API key not configured" };
  }

  try {
    const response = await fetch(`${MISTRAL_API_URL}/models`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${MISTRAL_API_KEY}`,
      },
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      return { available: false, error: `HTTP ${response.status}` };
    }

    return { available: true };
  } catch (error) {
    return {
      available: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
