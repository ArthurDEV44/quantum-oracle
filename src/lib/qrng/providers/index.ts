/**
 * QRNG Provider Chain
 */

import type { QRNGProvider } from "../types";
import { fetchFromLfD } from "./lfd";
import { fetchFromNIST } from "./nist";

export { fetchFromLfD } from "./lfd";
export { fetchFromNIST } from "./nist";
export { generateCryptoFallback } from "./crypto-fallback";

/**
 * Ordered list of QRNG providers to try
 * LfD is primary (true quantum), NIST is secondary
 */
export const providers: QRNGProvider[] = [
  { name: "LfD", fetch: fetchFromLfD },
  { name: "NIST", fetch: fetchFromNIST },
];
