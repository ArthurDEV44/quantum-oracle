/**
 * QRNG Configuration
 */

export const CONFIG = {
  timeout: 8000, // 8 seconds timeout per request
  globalTimeout: 20000, // 20 seconds max for entire provider chain
  maxRetries: 2,
  retryDelayMs: 500,
  retryJitter: 0.5, // Random jitter factor (0.5 = ±50%)
  nistCacheTtl: 60000, // 60 seconds cache for NIST (beacon updates every 60s)
  circuitBreaker: {
    failureThreshold: 3, // Open circuit after 3 consecutive failures
    resetTimeout: 30000, // Try again after 30 seconds
  },
} as const;

export const isDev = process.env.NODE_ENV === "development";
