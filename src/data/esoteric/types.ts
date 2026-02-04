/**
 * Esoteric Traditions — Centralized Type Definitions
 *
 * Types for all 13 esoteric traditions used by the Quantum Oracle engine.
 * Each tradition maps to a dedicated slice of QRNG bits (see US-014).
 *
 * Conventions:
 *   - Data files use `as const satisfies Record<number, Type>` for max type narrowing
 *   - All types are exported from this file and re-exported via index.ts
 *   - `TraditionCorrespondences` is a generic cross-reference bag used by most types
 */

// =============================================================================
// SHARED / CROSS-CUTTING TYPES
// =============================================================================

/** Generic cross-reference bag for correspondences between traditions */
export type TraditionCorrespondences = Record<
  string,
  string | readonly string[] | number
>;

/** String union for the 4 classical element names */
export type ElementName = "earth" | "water" | "fire" | "air";

/** Elemental balance metrics derived from quantum bytes */
export interface ElementBalance {
  physical: number;
  spiritual: number;
  passive: number;
  active: number;
}

/** Hebrew letter category per Sefer Yetzirah */
export type HebrewLetterCategory = "mother" | "double" | "simple";

// =============================================================================
// YI JING (I CHING) — 8 Trigrams + 64 Hexagrams
// =============================================================================

/** Enriched trigram (8 entries, index 0-7) */
export interface Trigram {
  index: number;
  name: string;
  symbol: string;
  element: string;
  attribute: string;
  binaryRepr: string;
  description: string;
  correspondences: TraditionCorrespondences;
}

/** Enriched hexagram (64 entries, number 1-64) */
export interface Hexagram {
  number: number;
  name: string;
  symbol: string;
  upperTrigramIndex: number;
  lowerTrigramIndex: number;
  meaning: string;
  judgmentText: string;
  imageText: string;
  mutatingLines: readonly [string, string, string, string, string, string];
  correspondences: TraditionCorrespondences;
}

// =============================================================================
// TAROT — 22 Major Arcana
// =============================================================================

/** Enriched tarot arcana (22 entries, number 0-21) */
export interface TarotArcana {
  number: number;
  name: string;
  symbol: string;
  meaning: string;
  keywords: readonly string[];
  uprightMeaning: string;
  reversedMeaning: string;
  astrologicalSign: string;
  element: string;
  hebrewLetter: string;
  pathOnTree: number;
  description: string;
  symbolism: string;
}

// =============================================================================
// KABBALAH — 10 Sefirot + 22 Paths
// =============================================================================

/** Enriched sefirah (10 entries, number 1-10) */
export interface Sefirah {
  number: number;
  name: string;
  hebrew: string;
  meaning: string;
  attribute: string;
  divineName: string;
  archangel: string;
  planet: string;
  color: string;
  element: string;
  description: string;
  correspondences: TraditionCorrespondences;
}

/** Kabbalah path on the Tree of Life (22 entries, number 1-22) */
export interface KabbalahPath {
  number: number;
  hebrewLetter: string;
  letterName: string;
  fromSefirahNumber: number;
  toSefirahNumber: number;
  tarotArcanaNumber: number;
  meaning: string;
  zodiacOrPlanet: string;
  element: string;
  category: HebrewLetterCategory;
  description: string;
}

// =============================================================================
// HERMETICISM — 7 Principles
// =============================================================================

/** Enriched hermetic principle (7 entries, number 1-7) */
export interface HermeticPrinciple {
  number: number;
  name: string;
  axiom: string;
  meaning: string;
  deepCommentary: string;
  historicalContext: string;
  correspondences: TraditionCorrespondences;
}

// =============================================================================
// ELEMENTS — 4 Classical Elements
// =============================================================================

/** Enriched classical element (4 entries) */
export interface Element {
  name: string;
  symbol: string;
  qualities: string;
  direction: string;
  season: string;
  temperament: string;
  zodiacSigns: readonly string[];
  correspondences: TraditionCorrespondences;
}

// =============================================================================
// IFA — 256 Odu
// =============================================================================

/** Odu Ifa (256 entries, number 0-255) */
export interface Odu {
  number: number;
  name: string;
  binarySignature: string;
  meaning: string;
  proverbs: readonly string[];
  eseIfaVerses: readonly string[];
  orisha: string;
  prescriptions: string;
  interdictions: string;
  element: string;
  correspondences: TraditionCorrespondences;
}

// =============================================================================
// GEOMANCY — 16 Figures
// =============================================================================

/** Geomantic figure (16 entries, number 0-15) */
export interface GeomancyFigure {
  number: number;
  nameArabic: string;
  nameLatin: string;
  binarySignature: string;
  element: string;
  planet: string;
  zodiacSign: string;
  meaning: string;
  reversedMeaning: string;
  judgeRole: string;
  correspondences: TraditionCorrespondences;
}

// =============================================================================
// ELDER FUTHARK — 24 Runes
// =============================================================================

/** Elder Futhark rune (24 entries, number 0-23) */
export interface Rune {
  number: number;
  name: string;
  glyph: string;
  phoneticValue: string;
  aettNumber: 1 | 2 | 3;
  meaning: string;
  merkstaveMeaning: string;
  isReversible: boolean;
  element: string;
  deity: string;
  description: string;
  correspondences: TraditionCorrespondences;
}

// =============================================================================
// ALCHEMY — 4 Stages + 7 Operations
// =============================================================================

/** Alchemical stage of the Great Work (4 entries, number 0-3) */
export interface AlchemyStage {
  number: number;
  name: string;
  latinName: string;
  color: string;
  planet: string;
  description: string;
  symbolism: string;
  correspondences: TraditionCorrespondences;
}

/** Alchemical operation (7 entries, number 0-6) */
export interface AlchemyOperation {
  number: number;
  name: string;
  latinName: string;
  planet: string;
  description: string;
  stageNumber: number;
}

// =============================================================================
// CHAKRAS & SOLFEGE — 7 Chakras + 9 Frequencies
// =============================================================================

/** Chakra (7 entries, number 0-6) */
export interface Chakra {
  number: number;
  nameSanskrit: string;
  nameFrench: string;
  location: string;
  color: string;
  element: string;
  mantra: string;
  solfegeFrequency: number;
  functionDesc: string;
  description: string;
  correspondences: TraditionCorrespondences;
}

/** Solfege frequency (9 entries, keyed by digital root) */
export interface SolfegeFrequency {
  frequencyHz: number;
  name: string;
  digitalRoot: number;
  description: string;
  healingProperty: string;
}

// =============================================================================
// GEMATRIA — 22 Hebrew Letters
// =============================================================================

/** Hebrew letter (22 entries, number 1-22) */
export interface HebrewLetter {
  number: number;
  letter: string;
  name: string;
  phoneticValue: string;
  numericalValue: number;
  meaning: string;
  pathNumber: number;
  category: HebrewLetterCategory;
  elementOrPlanetOrZodiac: string;
  description: string;
}

// =============================================================================
// SACRED GEOMETRY
// =============================================================================

/** Sacred geometry reading derived from quantum bytes */
export interface SacredGeometryReading {
  phiResonance: number;
  fibonacciAlignment: number;
  harmonicFrequency: string;
}

// =============================================================================
// SYNTHESIS
// =============================================================================

/** Synthesis reading combining all traditions */
export interface SynthesisReading {
  energy: number;
  polarity: "yin" | "yang" | "balanced";
  phase: "waxing" | "full" | "waning" | "new";
  cosmicTone: string;
}

// =============================================================================
// CORRESPONDENCES — Cross-tradition links
// =============================================================================

/** A single link between two traditions */
export interface CorrespondenceLink {
  from: string;
  to: string;
  shared: string;
}

/** A convergence where multiple traditions point to the same archetype */
export interface Convergence {
  archetype: string;
  traditions: string[];
}

/** Cross-tradition correspondences extracted from a reading */
export interface Correspondences {
  convergences: Convergence[];
  links: CorrespondenceLink[];
}
