/**
 * Circuit Breaker Pattern for QRNG Providers
 */

import { CONFIG, isDev } from "./config";
import type { CircuitBreakerState } from "./types";

const circuitBreakers = new Map<string, CircuitBreakerState>();

export function getCircuitBreaker(providerName: string): CircuitBreakerState {
  let breaker = circuitBreakers.get(providerName);
  if (!breaker) {
    breaker = { state: "CLOSED", failures: 0, lastFailure: 0, nextAttempt: 0 };
    circuitBreakers.set(providerName, breaker);
  }
  return breaker;
}

export function isCircuitOpen(providerName: string): boolean {
  const breaker = getCircuitBreaker(providerName);
  const now = Date.now();

  if (breaker.state === "OPEN") {
    if (now >= breaker.nextAttempt) {
      breaker.state = "HALF_OPEN";
      if (isDev) {
        console.log(`Circuit breaker for ${providerName}: OPEN -> HALF_OPEN`);
      }
      return false;
    }
    return true;
  }

  return false;
}

export function recordSuccess(providerName: string): void {
  const breaker = getCircuitBreaker(providerName);
  breaker.state = "CLOSED";
  breaker.failures = 0;
}

export function recordFailure(providerName: string): void {
  const breaker = getCircuitBreaker(providerName);
  const now = Date.now();

  breaker.failures++;
  breaker.lastFailure = now;

  if (breaker.failures >= CONFIG.circuitBreaker.failureThreshold) {
    breaker.state = "OPEN";
    breaker.nextAttempt = now + CONFIG.circuitBreaker.resetTimeout;
    if (isDev) {
      console.warn(
        `Circuit breaker for ${providerName}: OPEN (${breaker.failures} failures)`
      );
    }
  }
}

/**
 * Get circuit breaker status for all providers (useful for monitoring)
 */
export function getCircuitBreakerStatus(): Record<string, CircuitBreakerState> {
  const status: Record<string, CircuitBreakerState> = {};
  for (const [name, breaker] of circuitBreakers) {
    status[name] = { ...breaker };
  }
  return status;
}

/**
 * Reset circuit breaker for a specific provider or all providers
 */
export function resetCircuitBreaker(providerName?: string): void {
  if (providerName) {
    circuitBreakers.delete(providerName);
  } else {
    circuitBreakers.clear();
  }
}
