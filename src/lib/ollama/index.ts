/**
 * Ollama Integration for Quantum Oracle
 *
 * Uses Mistral-Trismegistus-7B for generating clear, practical responses
 * guided by quantum-esoteric interpretations.
 */

import { calculateEsotericReading } from "../esoteric";
import { OLLAMA_URL, MODEL_NAME, CONFIG, isDev } from "./config";
import {
  isCircuitOpen,
  recordSuccess,
  recordFailure,
  getCircuitBreakerStatus,
  resetCircuitBreaker,
} from "./circuit-breaker";
import { SYSTEM_PROMPT, buildPrompt, getCategoryAndTone } from "./prompts";
import { checkHealth, clearHealthCache } from "./health";
import type { QuantumConstraints, OracleResponse } from "./types";

// Re-exports
export type {
  QuantumConstraints,
  OracleResponse,
  HealthCheckResult,
  EnergyCategory,
  OllamaCircuitState,
  OllamaCircuitBreakerState,
  QuantumEsotericReading,
} from "./types";

export {
  getCircuitBreakerStatus as getOllamaCircuitBreakerStatus,
  resetCircuitBreaker as resetOllamaCircuitBreaker,
} from "./circuit-breaker";

export { checkHealth as checkOllamaHealth, clearHealthCache } from "./health";

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

      if (lastError.message === "Circuit breaker is open") {
        throw lastError;
      }

      if (attempt < retries) {
        const baseDelay = CONFIG.retryDelayMs * Math.pow(2, attempt);
        const jitterMultiplier =
          1 - CONFIG.retryJitter + Math.random() * CONFIG.retryJitter * 2;
        const delay = Math.floor(baseDelay * jitterMultiplier);

        if (isDev) {
          console.log(`Ollama retry ${attempt + 1}/${retries} in ${delay}ms`);
        }
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError;
}

/**
 * Derive quantum constraints from raw quantum numbers
 */
export function deriveQuantumConstraints(numbers: number[]): QuantumConstraints {
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
 * Clean up the LLM response
 */
function cleanResponse(text: string): string {
  if (!text) {
    if (isDev) {
      console.warn("Ollama returned empty response");
    }
    return "";
  }

  const cleaned = text
    .trim()
    .replace(/^(ASSISTANT:|Oracle:|Response:|Answer:)\s*/i, "")
    .replace(/^[\d-]+\s*[Ss]entence[s]?\s*[Rr]esponse:\s*/i, "")
    .replace(/^\*\*?[^*]+\*\*?:\s*/i, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  if (isDev && !cleaned) {
    console.warn(
      "Ollama response cleaned to empty. Original:",
      text.substring(0, 100)
    );
  }

  return cleaned;
}

/**
 * Generate oracle response using Ollama
 */
export async function generateOracleResponse(
  question: string,
  numbers: number[]
): Promise<OracleResponse> {
  if (isCircuitOpen()) {
    throw new Error(
      "Ollama circuit breaker is open - service temporarily unavailable"
    );
  }

  const constraints = deriveQuantumConstraints(numbers);
  const prompt = buildPrompt(question, constraints);

  try {
    const result = await withRetry(async () => {
      const response = await fetch(`${OLLAMA_URL}/api/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: MODEL_NAME,
          system: SYSTEM_PROMPT,
          prompt,
          stream: false,
          options: {
            temperature: constraints.temperature,
            seed: constraints.seed,
            num_predict: 100,
            top_p: 0.85,
            top_k: 30,
            repeat_penalty: 1.2,
            stop: [
              "USER:",
              "SEEKER'S QUESTION:",
              "[QUANTUM",
              "As the Oracle",
              "As the Quantum",
              "In conclusion",
            ],
          },
        }),
        signal: AbortSignal.timeout(CONFIG.generateTimeout),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Ollama error: ${response.status} - ${error}`);
      }

      return response.json();
    });

    recordSuccess();

    return {
      text: cleanResponse(result.response),
      model: MODEL_NAME,
      constraints,
    };
  } catch (error) {
    recordFailure();
    throw error;
  }
}
