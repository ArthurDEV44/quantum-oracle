export interface QuantumResult {
  numbers: number[];
  timestamp: Date;
  source: "lfd" | "nist" | "fallback";
}

interface QRNGProvider {
  name: string;
  fetch: (length: number, signal: AbortSignal) => Promise<QuantumResult>;
}

// Configuration
const CONFIG = {
  timeout: 8000, // 8 seconds timeout per request
  maxRetries: 2,
  retryDelayMs: 500,
};

// Helper to convert hex string to number array
function hexToNumbers(hex: string, maxLength?: number): number[] {
  const numbers: number[] = [];
  const cleanHex = hex.replace(/[^0-9a-fA-F]/g, "");
  const limit = maxLength ? Math.min(cleanHex.length, maxLength * 2) : cleanHex.length;

  for (let i = 0; i < limit; i += 2) {
    numbers.push(parseInt(cleanHex.substring(i, i + 2), 16));
  }
  return numbers;
}

// Retry wrapper with exponential backoff
async function withRetry<T>(
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
        const delay = CONFIG.retryDelayMs * Math.pow(2, attempt);
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  throw lastError;
}

// Fetch with timeout using AbortController
async function fetchWithTimeout(
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

// ============================================================================
// QRNG Providers
// ============================================================================

/**
 * LfD QRNG API (Leibniz Universität Hannover, Germany)
 * Uses ID Quantique QRNG PCIe hardware
 * Docs: https://lfdr.de/QRNG/
 */
async function fetchFromLfD(length: number, signal: AbortSignal): Promise<QuantumResult> {
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

  // API returns { qrn: string, length: number }
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

/**
 * NIST Randomness Beacon 2.0
 * Provides cryptographically signed random values every 60 seconds
 * Docs: https://csrc.nist.gov/projects/interoperable-randomness-beacons
 */
async function fetchFromNIST(length: number, signal: AbortSignal): Promise<QuantumResult> {
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

  // outputValue is a 512-bit (128 hex chars) random value
  const numbers = hexToNumbers(data.pulse.outputValue, length);

  if (numbers.length < length) {
    // If we need more bytes than one pulse provides (64 bytes max),
    // we can use localRandomValue as additional entropy
    const additionalNumbers = hexToNumbers(
      data.pulse.localRandomValue || "",
      length - numbers.length
    );
    numbers.push(...additionalNumbers);
  }

  if (numbers.length === 0) {
    throw new Error("NIST Beacon returned insufficient data");
  }

  return {
    numbers: numbers.slice(0, length),
    timestamp: new Date(),
    source: "nist",
  };
}

/**
 * Crypto fallback (uses system entropy via Web Crypto API)
 * Not quantum-based but cryptographically secure
 */
function generateCryptoFallback(length: number): QuantumResult {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);

  return {
    numbers: Array.from(array),
    timestamp: new Date(),
    source: "fallback",
  };
}

// ============================================================================
// Provider chain
// ============================================================================

const providers: QRNGProvider[] = [
  { name: "LfD", fetch: fetchFromLfD },
  { name: "NIST", fetch: fetchFromNIST },
];

export async function getQuantumRandomNumbers(
  length: number = 1
): Promise<QuantumResult> {
  const errors: string[] = [];

  for (const provider of providers) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), CONFIG.timeout);

      try {
        const result = await withRetry(() =>
          provider.fetch(length, controller.signal)
        );
        return result;
      } finally {
        clearTimeout(timeoutId);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      errors.push(`${provider.name}: ${message}`);
      console.warn(`${provider.name} QRNG failed:`, message);
    }
  }

  // Last resort: crypto fallback
  console.warn("All QRNG providers failed, using crypto fallback. Errors:", errors);
  return generateCryptoFallback(length);
}

export async function getQuantumBit(): Promise<0 | 1> {
  const result = await getQuantumRandomNumbers(1);
  return (result.numbers[0] % 2) as 0 | 1;
}

export async function getQuantumChoice<T>(options: T[]): Promise<T> {
  const result = await getQuantumRandomNumbers(1);
  const index = result.numbers[0] % options.length;
  return options[index];
}

/**
 * Legacy function - kept for fallback when Ollama is unavailable
 * @deprecated Use generateOracleResponse from ollama.ts instead
 */
export function interpretQuantumResponse(numbers: number[]): string {
  const sum = numbers.reduce((a, b) => a + b, 0);
  const average = sum / numbers.length;
  const normalized = average / 255;

  const responses = getFallbackResponses(normalized);
  const index = numbers[0] % responses.length;

  return responses[index];
}

/**
 * Fallback responses when Ollama is unavailable
 */
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
