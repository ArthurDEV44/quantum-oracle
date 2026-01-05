/**
 * Ollama Circuit Breaker
 */

import { CONFIG, isDev } from "./config";
import type { OllamaCircuitBreakerState } from "./types";

let circuitBreaker: OllamaCircuitBreakerState = {
  state: "CLOSED",
  failures: 0,
  lastFailure: 0,
  nextAttempt: 0,
};

export function isCircuitOpen(): boolean {
  const now = Date.now();

  if (circuitBreaker.state === "OPEN") {
    if (now >= circuitBreaker.nextAttempt) {
      circuitBreaker.state = "HALF_OPEN";
      if (isDev) {
        console.log("Ollama circuit breaker: OPEN -> HALF_OPEN");
      }
      return false;
    }
    return true;
  }

  return false;
}

export function recordSuccess(): void {
  circuitBreaker.state = "CLOSED";
  circuitBreaker.failures = 0;
}

export function recordFailure(): void {
  const now = Date.now();

  circuitBreaker.failures++;
  circuitBreaker.lastFailure = now;

  if (circuitBreaker.failures >= CONFIG.circuitBreaker.failureThreshold) {
    circuitBreaker.state = "OPEN";
    circuitBreaker.nextAttempt = now + CONFIG.circuitBreaker.resetTimeout;
    if (isDev) {
      console.warn(
        `Ollama circuit breaker: OPEN (${circuitBreaker.failures} failures)`
      );
    }
  }
}

export function getCircuitBreakerStatus(): OllamaCircuitBreakerState {
  return { ...circuitBreaker };
}

export function resetCircuitBreaker(): void {
  circuitBreaker = {
    state: "CLOSED",
    failures: 0,
    lastFailure: 0,
    nextAttempt: 0,
  };
}
