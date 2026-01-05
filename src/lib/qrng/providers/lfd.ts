/**
 * LfD QRNG Provider (Leibniz Universität Hannover, Germany)
 * Uses ID Quantique QRNG PCIe hardware
 * @see https://lfdr.de/QRNG/
 */

import type { QuantumResult } from "../types";
import { fetchWithTimeout, hexToNumbers } from "../utils";

export async function fetchFromLfD(
  length: number,
  signal: AbortSignal
): Promise<QuantumResult> {
  const url = `https://lfdr.de/qrng_api/qrng?length=${length}&format=HEX`;

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

  if (!data.qrn || typeof data.qrn !== "string") {
    throw new Error("LfD QRNG returned invalid response format");
  }

  const numbers = hexToNumbers(data.qrn);

  if (numbers.length === 0) {
    throw new Error("LfD QRNG returned empty data");
  }

  return {
    numbers,
    timestamp: new Date(),
    source: "lfd",
  };
}
