/**
 * Mistral API Configuration
 */

export const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY;
export const MISTRAL_API_URL = "https://api.mistral.ai/v1";

// Best quality/price ratio for creative/esoteric content
export const MODEL_NAME = "mistral-small-latest";

export const CONFIG = {
  // Timeouts
  generateTimeout: 30000, // 30s for generation

  // Retry settings
  maxRetries: 2,
  retryDelayMs: 1000,
  retryJitter: 0.5,

  // Model parameters
  maxTokens: 250,
  topP: 0.85,
} as const;

export const isDev = process.env.NODE_ENV === "development";

/**
 * Check if Mistral is configured
 */
export function isMistralConfigured(): boolean {
  return !!MISTRAL_API_KEY;
}
