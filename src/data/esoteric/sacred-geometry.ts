/**
 * Sacred Geometry - Golden Ratio & Fibonacci
 */

export const PHI = 1.618033988749895;
export const FIBONACCI = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233] as const;

export interface SacredGeometryReading {
  phiResonance: number;
  fibonacciAlignment: number;
  harmonicFrequency: string;
}

/**
 * Calculate sacred geometry metrics from quantum bytes
 */
export function calculateSacredGeometry(bytes: number[]): SacredGeometryReading {
  const average = bytes.reduce((a, b) => a + b, 0) / bytes.length;

  // Calculate Phi resonance from consecutive byte ratios
  let phiSum = 0;
  for (let i = 0; i < bytes.length - 1; i++) {
    const ratio =
      Math.max(bytes[i], bytes[i + 1]) / (Math.min(bytes[i], bytes[i + 1]) || 1);
    phiSum += 1 - Math.min(Math.abs(ratio - PHI) / PHI, 1);
  }
  const phiResonance = phiSum / (bytes.length - 1);

  // Find closest Fibonacci number
  const fibonacciAlignment = FIBONACCI.reduce((closest, fib) =>
    Math.abs(fib - average) < Math.abs(closest - average) ? fib : closest
  );

  // Determine harmonic frequency
  const harmonicFrequency =
    phiResonance > 0.8 ? "Divine harmony - strong cosmic alignment" :
    phiResonance > 0.6 ? "High resonance - favorable universal flow" :
    phiResonance > 0.4 ? "Balanced vibration - neutral cosmic state" :
    phiResonance > 0.2 ? "Low resonance - introspective energy" :
    "Chaotic vibration - transformative potential";

  return { phiResonance, fibonacciAlignment, harmonicFrequency };
}
