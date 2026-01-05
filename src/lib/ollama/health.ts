/**
 * Ollama Health Check
 */

import { OLLAMA_URL, MODEL_NAME, CONFIG } from "./config";
import type { HealthCheckResult } from "./types";

let healthCache: { data: HealthCheckResult; expires: number } | null = null;

/**
 * Check if Ollama is available and model is loaded
 * Caches result for CONFIG.healthCacheTtl ms
 */
export async function checkHealth(): Promise<HealthCheckResult> {
  const now = Date.now();

  // Return cached result if still valid
  if (healthCache && healthCache.expires > now) {
    return healthCache.data;
  }

  try {
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
 * Clear health cache (force fresh check on next call)
 */
export function clearHealthCache(): void {
  healthCache = null;
}
