/**
 * NIST Randomness Beacon 2.0
 * Provides cryptographically signed random values every 60 seconds
 * @see https://csrc.nist.gov/projects/interoperable-randomness-beacons
 */

import type { QuantumResult } from "../types";
import { CONFIG } from "../config";
import { fetchWithTimeout, hexToNumbers } from "../utils";

// NIST cache (beacon updates every 60s)
let nistCache: { data: QuantumResult; expires: number } | null = null;

export async function fetchFromNIST(
  length: number,
  signal: AbortSignal
): Promise<QuantumResult> {
  const now = Date.now();

  // Check cache first
  if (
    nistCache &&
    nistCache.expires > now &&
    nistCache.data.numbers.length >= length
  ) {
    return {
      numbers: nistCache.data.numbers.slice(0, length),
      timestamp: nistCache.data.timestamp,
      source: "nist",
    };
  }

  const url = "https://beacon.nist.gov/beacon/2.0/pulse/last";

  const response = await fetchWithTimeout(
    url,
    {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
    },
    signal
  );

  const data = await response.json();

  if (!data.pulse?.outputValue) {
    throw new Error("NIST Beacon returned invalid response");
  }

  // outputValue is 512-bit (128 hex chars) = 64 bytes
  const fullNumbers = hexToNumbers(data.pulse.outputValue);

  if (fullNumbers.length < length && data.pulse.localRandomValue) {
    const additionalNumbers = hexToNumbers(
      data.pulse.localRandomValue,
      length - fullNumbers.length
    );
    fullNumbers.push(...additionalNumbers);
  }

  if (fullNumbers.length === 0) {
    throw new Error("NIST Beacon returned insufficient data");
  }

  // Cache the full result
  const result: QuantumResult = {
    numbers: fullNumbers,
    timestamp: new Date(),
    source: "nist",
  };
  nistCache = { data: result, expires: now + CONFIG.nistCacheTtl };

  return {
    numbers: fullNumbers.slice(0, length),
    timestamp: result.timestamp,
    source: "nist",
  };
}
