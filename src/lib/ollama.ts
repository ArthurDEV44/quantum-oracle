/**
 * Ollama Integration for Quantum Oracle
 *
 * Uses Mistral-Trismegistus-7B for generating clear, practical responses
 * guided by quantum-esoteric interpretations.
 *
 * Features:
 * - Multi-traditional esoteric system (I Ching, Tarot, Kabbalah, Hermetic)
 * - AbortSignal.timeout() for request timeouts
 * - Retry with exponential backoff + jitter
 * - Circuit Breaker pattern to prevent hammering failing service
 * - Health check caching
 */

import {
  calculateEsotericReading,
  generateEsotericContext,
  type QuantumEsotericReading,
} from "./esoteric";

const OLLAMA_URL = process.env.OLLAMA_URL || "http://localhost:11434";
const MODEL_NAME = "arthurjean/mistral-trismegistus:7b-q6_K";

// Configuration
const CONFIG = {
  // Timeouts
  generateTimeout: 30000, // 30s for LLM generation (can be slow)
  healthCheckTimeout: 5000, // 5s for health check
  healthCacheTtl: 5000, // 5s cache for health check

  // Retry settings
  maxRetries: 2,
  retryDelayMs: 1000,
  retryJitter: 0.5, // ±50% jitter

  // Circuit Breaker
  circuitBreaker: {
    failureThreshold: 3,
    resetTimeout: 60000, // 1 minute before retry
  },
};

// Environment check for logging
const isDev = process.env.NODE_ENV === "development";

// ============================================================================
// Circuit Breaker Pattern
// ============================================================================

export type OllamaCircuitState = "CLOSED" | "OPEN" | "HALF_OPEN";

export interface OllamaCircuitBreakerState {
  state: OllamaCircuitState;
  failures: number;
  lastFailure: number;
  nextAttempt: number;
}

let ollamaCircuitBreaker: OllamaCircuitBreakerState = {
  state: "CLOSED",
  failures: 0,
  lastFailure: 0,
  nextAttempt: 0,
};

function isCircuitOpen(): boolean {
  const now = Date.now();

  if (ollamaCircuitBreaker.state === "OPEN") {
    if (now >= ollamaCircuitBreaker.nextAttempt) {
      ollamaCircuitBreaker.state = "HALF_OPEN";
      if (isDev) {
        console.log("Ollama circuit breaker: OPEN -> HALF_OPEN");
      }
      return false;
    }
    return true;
  }

  return false;
}

function recordSuccess(): void {
  ollamaCircuitBreaker.state = "CLOSED";
  ollamaCircuitBreaker.failures = 0;
}

function recordFailure(): void {
  const now = Date.now();

  ollamaCircuitBreaker.failures++;
  ollamaCircuitBreaker.lastFailure = now;

  if (ollamaCircuitBreaker.failures >= CONFIG.circuitBreaker.failureThreshold) {
    ollamaCircuitBreaker.state = "OPEN";
    ollamaCircuitBreaker.nextAttempt = now + CONFIG.circuitBreaker.resetTimeout;
    if (isDev) {
      console.warn(
        `Ollama circuit breaker: OPEN (${ollamaCircuitBreaker.failures} failures)`
      );
    }
  }
}

// ============================================================================
// Retry with Exponential Backoff + Jitter
// ============================================================================

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

      // Don't retry on circuit breaker open
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

// ============================================================================
// Health Check Cache
// ============================================================================

interface HealthCheckResult {
  available: boolean;
  modelLoaded: boolean;
  error?: string;
}

let healthCache: { data: HealthCheckResult; expires: number } | null = null;

export interface QuantumConstraints {
  energy: number; // 0-1 normalized energy level
  category: EnergyCategory;
  tone: string;
  temperature: number; // LLM temperature derived from quantum variance
  seed: number; // First quantum byte for reproducibility
  esoteric: QuantumEsotericReading; // Full esoteric interpretation
}

export type EnergyCategory =
  | "very_low"
  | "low"
  | "neutral"
  | "high"
  | "very_high";

export interface OracleResponse {
  text: string;
  model: string;
  constraints: QuantumConstraints;
}

export type { QuantumEsotericReading } from "./esoteric";

/**
 * Derive quantum constraints from raw quantum numbers
 * Includes full esoteric interpretation from multiple traditions
 */
export function deriveQuantumConstraints(numbers: number[]): QuantumConstraints {
  // Calculate esoteric reading first (includes all calculations)
  const esoteric = calculateEsotericReading(numbers);

  // Use synthesis energy from esoteric calculation
  const energy = esoteric.synthesis.energy;

  // Calculate variance for temperature
  const variance = esoteric.quantum.variance;
  // Map variance to temperature range (0.3 - 0.9)
  const temperature = 0.3 + variance * 2.4;

  // Determine category and tone based on esoteric synthesis
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

function getCategoryAndTone(energy: number): {
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

/**
 * System prompt optimized for Mistral-Trismegistus-7B
 *
 * Design principles (2025 best practices):
 * - Leverages model's esoteric/spiritual training
 * - Multi-traditional wisdom synthesis
 * - Clear, concise instructions
 *
 * @see https://huggingface.co/TheBloke/Mistral-Trismegistus-7B-GGUF
 */
const SYSTEM_PROMPT = `You are the Quantum Oracle, a Hermetic sage who channels universal wisdom through quantum entropy.

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
 *
 * Format optimized for Mistral-Trismegistus USER:/ASSISTANT: pattern
 * - Rich esoteric context from multiple traditions
 * - Structured for clear interpretation
 */
function buildPrompt(question: string, constraints: QuantumConstraints): string {
  const esotericContext = generateEsotericContext(constraints.esoteric);

  return `${esotericContext}

SEEKER'S QUESTION: "${question}"`;
}

/**
 * Generate oracle response using Ollama
 * - Uses AbortSignal.timeout() for request timeout
 * - Retries with exponential backoff + jitter
 * - Respects circuit breaker state
 */
export async function generateOracleResponse(
  question: string,
  numbers: number[]
): Promise<OracleResponse> {
  // Check circuit breaker first
  if (isCircuitOpen()) {
    throw new Error("Ollama circuit breaker is open - service temporarily unavailable");
  }

  const constraints = deriveQuantumConstraints(numbers);
  const prompt = buildPrompt(question, constraints);

  try {
    const result = await withRetry(async () => {
      const response = await fetch(`${OLLAMA_URL}/api/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
            stop: ["USER:", "SEEKER'S QUESTION:", "[QUANTUM", "As the Oracle", "As the Quantum", "In conclusion"],
          },
        }),
        // Modern timeout using AbortSignal.timeout()
        signal: AbortSignal.timeout(CONFIG.generateTimeout),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Ollama error: ${response.status} - ${error}`);
      }

      return response.json();
    });

    // Success: reset circuit breaker
    recordSuccess();

    return {
      text: cleanResponse(result.response),
      model: MODEL_NAME,
      constraints,
    };
  } catch (error) {
    // Record failure for circuit breaker
    recordFailure();
    throw error;
  }
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
    .replace(/^\*\*?[^*]+\*\*?:\s*/i, "") // Remove **Label**: patterns
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  if (isDev && !cleaned) {
    console.warn("Ollama response cleaned to empty. Original:", text.substring(0, 100));
  }

  return cleaned;
}

/**
 * Check if Ollama is available and model is loaded
 * - Caches result for CONFIG.healthCacheTtl ms to reduce API calls
 */
export async function checkOllamaHealth(): Promise<HealthCheckResult> {
  // Return cached result if still valid
  const now = Date.now();
  if (healthCache && healthCache.expires > now) {
    return healthCache.data;
  }

  try {
    // Check if Ollama is running
    const tagsResponse = await fetch(`${OLLAMA_URL}/api/tags`, {
      signal: AbortSignal.timeout(CONFIG.healthCheckTimeout),
    });

    if (!tagsResponse.ok) {
      const result: HealthCheckResult = {
        available: false,
        modelLoaded: false,
        error: "Ollama not responding",
      };
      healthCache = { data: result, expires: now + CONFIG.healthCacheTtl };
      return result;
    }

    const tags = await tagsResponse.json();
    const modelLoaded = tags.models?.some(
      (m: { name: string }) => m.name.startsWith(MODEL_NAME)
    );

    const result: HealthCheckResult = { available: true, modelLoaded };
    healthCache = { data: result, expires: now + CONFIG.healthCacheTtl };
    return result;
  } catch (error) {
    const result: HealthCheckResult = {
      available: false,
      modelLoaded: false,
      error: error instanceof Error ? error.message : "Connection failed",
    };
    healthCache = { data: result, expires: now + CONFIG.healthCacheTtl };
    return result;
  }
}

/**
 * Get circuit breaker status (useful for monitoring)
 */
export function getOllamaCircuitBreakerStatus(): OllamaCircuitBreakerState {
  return { ...ollamaCircuitBreaker };
}

/**
 * Reset circuit breaker manually (useful for admin/debugging)
 */
export function resetOllamaCircuitBreaker(): void {
  ollamaCircuitBreaker = {
    state: "CLOSED",
    failures: 0,
    lastFailure: 0,
    nextAttempt: 0,
  };
}

/**
 * Clear health cache (force fresh check on next call)
 */
export function clearHealthCache(): void {
  healthCache = null;
}
