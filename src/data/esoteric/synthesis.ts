/**
 * Esoteric Synthesis — Cosmic Tones and Unified Reading
 *
 * Combines polarity (yin/yang/balanced) and phase (new/waxing/full/waning)
 * into 12 cosmic tones, each mapped to a zodiac sign with its element
 * and modality (cardinal/fixed/mutable).
 *
 * The 12 tones form a complete astrological wheel:
 *   3 polarities × 4 phases = 12 = 4 elements × 3 modalities
 */

export interface SynthesisReading {
  energy: number;
  polarity: "yin" | "yang" | "balanced";
  phase: "waxing" | "full" | "waning" | "new";
  cosmicTone: string;
}

export interface CosmicTone {
  description: string;
  zodiacSign: string;
  element: "Fire" | "Water" | "Air" | "Earth";
  modality: "Cardinal" | "Fixed" | "Mutable";
}

/**
 * 12 cosmic tones mapped to the zodiacal wheel.
 *
 * Mapping rationale:
 *   - yang polarities → Fire signs (active, initiating, expressive)
 *   - yin polarities → Water/Earth signs (receptive, nurturing, grounding)
 *   - balanced polarities → Air signs + Scorpio (integrative, mediating)
 *   - "new" phase → Cardinal modality (initiation) for yang/yin,
 *     Cardinal for balanced
 *   - "waxing" phase → Fixed modality (building, stabilizing)
 *   - "full" phase → Mutable modality (peak expression, culmination)
 *   - "waning" phase → mixed (completing, transitioning)
 */
export const COSMIC_TONES: Record<string, CosmicTone> = {
  "yang-new": {
    description: "Seed of action - preparing for bold initiatives",
    zodiacSign: "Aries",
    element: "Fire",
    modality: "Cardinal",
  },
  "yang-waxing": {
    description: "Rising power - building momentum toward goals",
    zodiacSign: "Leo",
    element: "Fire",
    modality: "Fixed",
  },
  "yang-full": {
    description: "Peak expression - maximum creative force",
    zodiacSign: "Sagittarius",
    element: "Fire",
    modality: "Mutable",
  },
  "yang-waning": {
    description: "Harvesting results - completing and consolidating",
    zodiacSign: "Capricorn",
    element: "Earth",
    modality: "Cardinal",
  },
  "yin-new": {
    description: "Deep stillness - time for rest and inner reflection",
    zodiacSign: "Cancer",
    element: "Water",
    modality: "Cardinal",
  },
  "yin-waxing": {
    description: "Gentle emergence - nurturing growth with patience",
    zodiacSign: "Taurus",
    element: "Earth",
    modality: "Fixed",
  },
  "yin-full": {
    description: "Receptive abundance - open to receiving blessings",
    zodiacSign: "Virgo",
    element: "Earth",
    modality: "Mutable",
  },
  "yin-waning": {
    description: "Releasing attachment - letting go with grace",
    zodiacSign: "Pisces",
    element: "Water",
    modality: "Mutable",
  },
  "balanced-new": {
    description: "Perfect potential - all possibilities open",
    zodiacSign: "Libra",
    element: "Air",
    modality: "Cardinal",
  },
  "balanced-waxing": {
    description: "Harmonious growth - balanced development",
    zodiacSign: "Aquarius",
    element: "Air",
    modality: "Fixed",
  },
  "balanced-full": {
    description: "Complete integration - mind, body, spirit aligned",
    zodiacSign: "Gemini",
    element: "Air",
    modality: "Mutable",
  },
  "balanced-waning": {
    description: "Graceful transition - smooth transformation",
    zodiacSign: "Scorpio",
    element: "Water",
    modality: "Fixed",
  },
} as const;

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

  const toneKey = `${polarity}-${phase}`;
  const tone = COSMIC_TONES[toneKey];
  const cosmicTone = tone?.description ?? "Unknown resonance";

  return { energy, polarity, phase, cosmicTone };
}
