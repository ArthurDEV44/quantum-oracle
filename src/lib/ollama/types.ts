/**
 * Ollama Type Definitions
 */

import type { QuantumEsotericReading } from "../esoteric";

export type OllamaCircuitState = "CLOSED" | "OPEN" | "HALF_OPEN";

export interface OllamaCircuitBreakerState {
  state: OllamaCircuitState;
  failures: number;
  lastFailure: number;
  nextAttempt: number;
}

export type EnergyCategory =
  | "very_low"
  | "low"
  | "neutral"
  | "high"
  | "very_high";

export interface QuantumConstraints {
  energy: number;
  category: EnergyCategory;
  tone: string;
  temperature: number;
  seed: number;
  esoteric: QuantumEsotericReading;
}

export interface OracleResponse {
  text: string;
  model: string;
  constraints: QuantumConstraints;
}

export interface HealthCheckResult {
  available: boolean;
  modelLoaded: boolean;
  error?: string;
}

// Re-export for convenience
export type { QuantumEsotericReading } from "../esoteric";
