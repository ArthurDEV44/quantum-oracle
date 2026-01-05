/**
 * QRNG Utility Functions
 */

import { CONFIG } from "./config";

/**
 * Convert hex string to number array (optimized)
 */
export function hexToNumbers(hex: string, maxLength?: number): number[] {
  const len = hex.length;
  const limit = maxLength ? Math.min(len, maxLength * 2) : len;
  const numbers: number[] = new Array(Math.floor(limit / 2));

  let idx = 0;
  for (let i = 0; i < limit; i += 2) {
    const byte = parseInt(hex.substring(i, i + 2), 16);
    if (byte === byte) {
      // NaN check
      numbers[idx++] = byte;
    }
  }

  return idx === numbers.length ? numbers : numbers.slice(0, idx);
}

/**
 * Retry wrapper with exponential backoff + jitter
 */
export async function withRetry<T>(
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
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError;
}

/**
 * Fetch with timeout using AbortController
 */
export async function fetchWithTimeout(
  url: string,
  options: RequestInit,
  signal: AbortSignal
): Promise<Response> {
  const response = await fetch(url, { ...options, signal });
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  return response;
}
