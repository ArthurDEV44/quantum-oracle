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
  globalTimeout: 20000, // 20 seconds max for entire provider chain
  maxRetries: 2,
  retryDelayMs: 500,
  retryJitter: 0.5, // Random jitter factor (0.5 = ±50%)
  nistCacheTtl: 60000, // 60 seconds cache for NIST (beacon updates every 60s)
  // Circuit Breaker settings
  circuitBreaker: {
    failureThreshold: 3, // Open circuit after 3 consecutive failures
    resetTimeout: 30000, // Try again after 30 seconds
  },
};

// Environment check for logging
const isDev = process.env.NODE_ENV === "development";

// NIST cache
let nistCache: { data: QuantumResult; expires: number } | null = null;

// Request deduplication
const pendingRequests = new Map<number, Promise<QuantumResult>>();

// ============================================================================
// Circuit Breaker Pattern
// ============================================================================

export type CircuitState = "CLOSED" | "OPEN" | "HALF_OPEN";

export interface CircuitBreakerState {
  state: CircuitState;
  failures: number;
  lastFailure: number;
  nextAttempt: number;
}

const circuitBreakers = new Map<string, CircuitBreakerState>();

function getCircuitBreaker(providerName: string): CircuitBreakerState {
  let breaker = circuitBreakers.get(providerName);
  if (!breaker) {
    breaker = { state: "CLOSED", failures: 0, lastFailure: 0, nextAttempt: 0 };
    circuitBreakers.set(providerName, breaker);
  }
  return breaker;
}

function isCircuitOpen(providerName: string): boolean {
  const breaker = getCircuitBreaker(providerName);
  const now = Date.now();

  if (breaker.state === "OPEN") {
    // Check if we should transition to HALF_OPEN
    if (now >= breaker.nextAttempt) {
      breaker.state = "HALF_OPEN";
      if (isDev) {
        console.log(`Circuit breaker for ${providerName}: OPEN -> HALF_OPEN`);
      }
      return false; // Allow one test request
    }
    return true; // Still open, skip this provider
  }

  return false;
}

function recordSuccess(providerName: string): void {
  const breaker = getCircuitBreaker(providerName);
  breaker.state = "CLOSED";
  breaker.failures = 0;
}

function recordFailure(providerName: string): void {
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

// Helper to convert hex string to number array (optimized)
function hexToNumbers(hex: string, maxLength?: number): number[] {
  const len = hex.length;
  const limit = maxLength ? Math.min(len, maxLength * 2) : len;
  const numbers: number[] = new Array(Math.floor(limit / 2));

  let idx = 0;
  for (let i = 0; i < limit; i += 2) {
    const byte = parseInt(hex.substring(i, i + 2), 16);
    // Skip invalid hex pairs (NaN check)
    if (byte === byte) {
      numbers[idx++] = byte;
    }
  }

  // Trim if we skipped invalid bytes
  return idx === numbers.length ? numbers : numbers.slice(0, idx);
}

// Retry wrapper with exponential backoff + jitter
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
        // Exponential backoff with jitter to prevent thundering herd
        const baseDelay = CONFIG.retryDelayMs * Math.pow(2, attempt);
        const jitterMultiplier = 1 - CONFIG.retryJitter + Math.random() * CONFIG.retryJitter * 2;
        const delay = Math.floor(baseDelay * jitterMultiplier);
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
  // Check cache first (NIST only updates every 60s)
  const now = Date.now();
  if (nistCache && nistCache.expires > now && nistCache.data.numbers.length >= length) {
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

  // outputValue is a 512-bit (128 hex chars) random value = 64 bytes
  // Store full 64 bytes in cache for reuse
  const fullNumbers = hexToNumbers(data.pulse.outputValue);

  if (fullNumbers.length < length) {
    // If we need more bytes than one pulse provides (64 bytes max),
    // we can use localRandomValue as additional entropy
    const additionalNumbers = hexToNumbers(
      data.pulse.localRandomValue || "",
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

/**
 * Crypto fallback (uses system entropy via Web Crypto API)
 * Not quantum-based but cryptographically secure
 */
function generateCryptoFallback(length: number): QuantumResult {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);

  return {
    numbers: [...array],
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

  // Create a global timeout signal using AbortSignal.timeout()
  const globalSignal = AbortSignal.timeout(CONFIG.globalTimeout);

  for (const provider of providers) {
    // Circuit Breaker: skip provider if circuit is open
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

    // Calculate effective timeout based on remaining global time
    const remainingTime = CONFIG.globalTimeout - elapsed;
    const effectiveTimeout = Math.min(CONFIG.timeout, remainingTime);

    try {
      // Use AbortSignal.any() to combine per-request timeout + global timeout
      // This is the modern approach (2025+) - no manual setTimeout needed
      const combinedSignal = AbortSignal.any([
        AbortSignal.timeout(effectiveTimeout),
        globalSignal,
      ]);

      const result = await withRetry(() =>
        provider.fetch(length, combinedSignal)
      );

      // Success: reset circuit breaker
      recordSuccess(provider.name);
      return result;
    } catch (error) {
      // Record failure for circuit breaker
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
    console.warn("All QRNG providers failed, using crypto fallback. Errors:", errors);
  }
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
