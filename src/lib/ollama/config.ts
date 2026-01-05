/**
 * Ollama Configuration
 */

export const OLLAMA_URL = process.env.OLLAMA_URL || "http://localhost:11434";
export const MODEL_NAME = "arthurjean/mistral-trismegistus:7b-q6_K";

export const CONFIG = {
  // Timeouts
  generateTimeout: 30000, // 30s for LLM generation
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
} as const;

export const isDev = process.env.NODE_ENV === "development";
