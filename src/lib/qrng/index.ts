/**
 * Quantum Random Number Generator (QRNG) Module
 *
 * Provides true quantum random numbers from external providers:
 * 1. LfD (Leibniz Universität Hannover) - Primary
 * 2. NIST Beacon - Secondary
 * 3. Web Crypto API - Fallback (cryptographically secure, not quantum)
 */

import { CONFIG, isDev } from "./config";
import {
  isCircuitOpen,
  recordSuccess,
  recordFailure,
} from "./circuit-breaker";
import { withRetry } from "./utils";
import { providers, generateCryptoFallback } from "./providers";
import type { QuantumResult } from "./types";

// Re-exports
export type { QuantumResult, QRNGProvider, CircuitState, CircuitBreakerState } from "./types";
export { CONFIG } from "./config";
export {
  getCircuitBreakerStatus,
  resetCircuitBreaker,
} from "./circuit-breaker";

// Request deduplication
const pendingRequests = new Map<number, Promise<QuantumResult>>();

/**
 * Get quantum random numbers with automatic provider fallback
 */
export async function getQuantumRandomNumbers(
  length: number = 1
): Promise<QuantumResult> {
  // Request deduplication: reuse pending request for same length
  const pending = pendingRequests.get(length);
  if (pending) {
    return pending;
  }

  const request = fetchQuantumNumbers(length);
  pendingRequests.set(length, request);

  try {
    return await request;
  } finally {
    pendingRequests.delete(length);
  }
}

async function fetchQuantumNumbers(length: number): Promise<QuantumResult> {
  const errors: string[] = [];
  const globalStart = Date.now();
  const globalSignal = AbortSignal.timeout(CONFIG.globalTimeout);

  for (const provider of providers) {
    // Circuit Breaker: skip if open
    if (isCircuitOpen(provider.name)) {
      if (isDev) {
        console.log(`Skipping ${provider.name}: circuit breaker open`);
      }
      errors.push(`${provider.name}: circuit breaker open`);
      continue;
    }

    // Check global timeout
    const elapsed = Date.now() - globalStart;
    if (elapsed >= CONFIG.globalTimeout || globalSignal.aborted) {
      if (isDev) {
        console.warn("Global timeout reached, using crypto fallback");
      }
      break;
    }

    const remainingTime = CONFIG.globalTimeout - elapsed;
    const effectiveTimeout = Math.min(CONFIG.timeout, remainingTime);

    try {
      const combinedSignal = AbortSignal.any([
        AbortSignal.timeout(effectiveTimeout),
        globalSignal,
      ]);

      const result = await withRetry(() =>
        provider.fetch(length, combinedSignal)
      );

      recordSuccess(provider.name);
      return result;
    } catch (error) {
      recordFailure(provider.name);

      const message = error instanceof Error ? error.message : String(error);
      errors.push(`${provider.name}: ${message}`);
      if (isDev) {
        console.warn(`${provider.name} QRNG failed:`, message);
      }
    }
  }

  // Last resort: crypto fallback
  if (isDev) {
    console.warn(
      "All QRNG providers failed, using crypto fallback. Errors:",
      errors
    );
  }
  return generateCryptoFallback(length);
}

/**
 * Get a single quantum random bit (0 or 1)
 */
export async function getQuantumBit(): Promise<0 | 1> {
  const result = await getQuantumRandomNumbers(1);
  return (result.numbers[0] % 2) as 0 | 1;
}

/**
 * Get a quantum random choice from an array
 */
export async function getQuantumChoice<T>(options: T[]): Promise<T> {
  const result = await getQuantumRandomNumbers(1);
  const index = result.numbers[0] % options.length;
  return options[index];
}

/**
 * Fallback interpretation when LLM is unavailable
 */
export function interpretQuantumResponse(numbers: number[]): string {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const average = sum / numbers.length;
  const normalized = average / 255;

  const responses = getFallbackResponses(normalized);
  const index = numbers[0] % responses.length;

  return responses[index];
}

function getFallbackResponses(energy: number): string[] {
  if (energy < 0.2) {
    return [
      "This is a good time to pause and reflect. Take a step back to gather more information before making decisions.",
      "Consider slowing down and evaluating your options carefully. Patience often leads to better outcomes.",
    ];
  } else if (energy < 0.4) {
    return [
      "Proceed with care and preparation. Make sure you have what you need before taking the next step.",
      "A thoughtful approach is recommended. Trust your instincts but verify your assumptions.",
    ];
  } else if (energy < 0.6) {
    return [
      "You have multiple valid options ahead. Weigh the pros and cons, then choose what feels right.",
      "The situation is balanced. This is a neutral moment where your choice will shape the outcome.",
    ];
  } else if (energy < 0.8) {
    return [
      "Conditions look favorable for moving forward. Take confident action toward your goals.",
      "This is a good time to act. Trust your preparation and take the next step.",
    ];
  } else {
    return [
      "Strong indicators point toward success. Move forward with confidence and commitment.",
      "Everything aligns well for your intentions. This is an excellent moment to take decisive action.",
    ];
  }
}
