/**
 * Crypto Fallback (Web Crypto API)
 * Not quantum-based but cryptographically secure
 */

import type { QuantumResult } from "../types";

export function generateCryptoFallback(length: number): QuantumResult {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);

  return {
    numbers: [...array],
    timestamp: new Date(),
    source: "fallback",
  };
}
