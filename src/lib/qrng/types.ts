/**
 * QRNG Type Definitions
 */

export interface QuantumResult {
  numbers: number[];
  timestamp: Date;
  source: "lfd" | "nist" | "fallback";
}

export interface QRNGProvider {
  name: string;
  fetch: (length: number, signal: AbortSignal) => Promise<QuantumResult>;
}

export type CircuitState = "CLOSED" | "OPEN" | "HALF_OPEN";

export interface CircuitBreakerState {
  state: CircuitState;
  failures: number;
  lastFailure: number;
  nextAttempt: number;
}
