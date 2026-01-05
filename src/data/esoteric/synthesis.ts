/**
 * Esoteric Synthesis - Combines all traditions into unified reading
 */

export interface SynthesisReading {
  energy: number;
  polarity: "yin" | "yang" | "balanced";
  phase: "waxing" | "full" | "waning" | "new";
  cosmicTone: string;
}

// Cosmic tone lookup - compact format
const TONES: Record<string, string> = {
  "yin-new": "Deep stillness - time for rest and inner reflection",
  "yin-waxing": "Gentle emergence - nurturing growth with patience",
  "yin-full": "Receptive abundance - open to receiving blessings",
  "yin-waning": "Releasing attachment - letting go with grace",
  "yang-new": "Seed of action - preparing for bold initiatives",
  "yang-waxing": "Rising power - building momentum toward goals",
  "yang-full": "Peak expression - maximum creative force",
  "yang-waning": "Harvesting results - completing and consolidating",
  "balanced-new": "Perfect potential - all possibilities open",
  "balanced-waxing": "Harmonious growth - balanced development",
  "balanced-full": "Complete integration - mind, body, spirit aligned",
  "balanced-waning": "Graceful transition - smooth transformation",
};

/**
 * Calculate synthesis from quantum bytes
 */
export function calculateSynthesis(bytes: number[]): SynthesisReading {
  const average = bytes.reduce((a, b) => a + b, 0) / bytes.length;
  const energy = average / 255;

  // Polarity from odd/even distribution
  const oddCount = bytes.filter((b) => b % 2 === 1).length;
  const evenCount = bytes.length - oddCount;
  const polarity: SynthesisReading["polarity"] =
    oddCount > evenCount + 2 ? "yang" :
    evenCount > oddCount + 2 ? "yin" :
    "balanced";

  // Phase from energy level
  const phase: SynthesisReading["phase"] =
    energy < 0.25 ? "new" :
    energy < 0.5 ? "waxing" :
    energy < 0.75 ? "full" :
    "waning";

  const cosmicTone = TONES[`${polarity}-${phase}`];

  return { energy, polarity, phase, cosmicTone };
}
