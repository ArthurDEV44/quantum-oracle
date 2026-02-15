/**
 * Canonical Cross-Tradition Correspondence Tables
 *
 * Encodes the authentic historical correspondences between esoteric traditions
 * as defined by the Western esoteric tradition (Golden Dawn, Hermeticism,
 * Sefer Yetzirah). These static tables serve as reference for detecting
 * convergences in quantum readings — when multiple traditions independently
 * point to the same archetype, element, or planet.
 *
 * Seven canonical families:
 *   1. TAROT_PATH_LETTER (22-fold): Arcana ↔ Kabbalah Path ↔ Hebrew Letter
 *   2. SEPTENARY (7-fold): Hermetic ↔ Alchemy Operation ↔ Planet ↔ Metal ↔ Chakra
 *   3. QUATERNARY (4-fold): Element ↔ Alchemy Stage ↔ Direction ↔ Season
 *   4. ZODIAC_LETTER (12-fold): Zodiac ↔ Hebrew Simple Letter ↔ Element
 *   5. IFA_YIJING: Odu ↔ Hexagram via shared 6-bit binary pattern
 *   6. Geomancy ↔ Element ↔ Planet (defined on each GeomancyFigure in geomancy.ts)
 *   7. Runes ↔ Element ↔ Season (defined on each Rune in runes.ts)
 */

import type { Element } from "./elements";

// =============================================================================
// TABLE ENTRY TYPES
// =============================================================================

/** 22-fold: Tarot Major Arcana ↔ Kabbalah Path ↔ Hebrew Letter (Golden Dawn) */
export interface TarotPathLetterEntry {
  tarotNumber: number;
  pathNumber: number;
  letterNumber: number;
  attribution: string;
}

/** 7-fold: Hermetic Principle ↔ Alchemy Operation ↔ Planet ↔ Metal ↔ Chakra */
export interface SeptenaryEntry {
  hermeticNumber: number;
  operationNumber: number;
  planet: string;
  metal: string;
  chakraNumber: number;
}

/** 4-fold: Classical Element ↔ Alchemy Stage ↔ Direction ↔ Season */
export interface QuaternaryEntry {
  element: Element;
  stageNumber: number;
  direction: string;
  season: string;
}

/** 12-fold: Zodiac Sign ↔ Hebrew Simple Letter ↔ Classical Element */
export interface ZodiacLetterEntry {
  zodiac: string;
  letterNumber: number;
  element: Element;
}

// =============================================================================
// 1. TAROT ↔ PATH ↔ HEBREW LETTER (22-fold, Golden Dawn tradition)
//
// The Golden Dawn assigned each of the 22 Major Arcana to one of the 22
// paths on the Tree of Life and to the corresponding Hebrew letter of
// the Sefer Yetzirah. Path numbers here use our data file numbering (1-22),
// matching KabbalahPath.number in kabbalah-paths.ts.
// =============================================================================

export const TAROT_PATH_LETTER: readonly TarotPathLetterEntry[] = [
  { tarotNumber: 0, pathNumber: 1, letterNumber: 1, attribution: "Air" },
  { tarotNumber: 1, pathNumber: 2, letterNumber: 2, attribution: "Mercury" },
  { tarotNumber: 2, pathNumber: 3, letterNumber: 3, attribution: "Moon" },
  { tarotNumber: 3, pathNumber: 4, letterNumber: 4, attribution: "Venus" },
  { tarotNumber: 4, pathNumber: 5, letterNumber: 5, attribution: "Aries" },
  { tarotNumber: 5, pathNumber: 6, letterNumber: 6, attribution: "Taurus" },
  { tarotNumber: 6, pathNumber: 7, letterNumber: 7, attribution: "Gemini" },
  { tarotNumber: 7, pathNumber: 8, letterNumber: 8, attribution: "Cancer" },
  { tarotNumber: 8, pathNumber: 9, letterNumber: 9, attribution: "Leo" },
  { tarotNumber: 9, pathNumber: 10, letterNumber: 10, attribution: "Virgo" },
  { tarotNumber: 10, pathNumber: 11, letterNumber: 11, attribution: "Jupiter" },
  { tarotNumber: 11, pathNumber: 12, letterNumber: 12, attribution: "Libra" },
  { tarotNumber: 12, pathNumber: 13, letterNumber: 13, attribution: "Water" },
  { tarotNumber: 13, pathNumber: 14, letterNumber: 14, attribution: "Scorpio" },
  {
    tarotNumber: 14,
    pathNumber: 15,
    letterNumber: 15,
    attribution: "Sagittarius",
  },
  {
    tarotNumber: 15,
    pathNumber: 16,
    letterNumber: 16,
    attribution: "Capricorn",
  },
  { tarotNumber: 16, pathNumber: 17, letterNumber: 17, attribution: "Mars" },
  {
    tarotNumber: 17,
    pathNumber: 18,
    letterNumber: 18,
    attribution: "Aquarius",
  },
  { tarotNumber: 18, pathNumber: 19, letterNumber: 19, attribution: "Pisces" },
  { tarotNumber: 19, pathNumber: 20, letterNumber: 20, attribution: "Sun" },
  { tarotNumber: 20, pathNumber: 21, letterNumber: 21, attribution: "Fire" },
  { tarotNumber: 21, pathNumber: 22, letterNumber: 22, attribution: "Saturn" },
] as const;

// =============================================================================
// 2. SEPTENARY CORRESPONDENCES (7-fold, Hermetic-Alchemical tradition)
//
// The seven classical planets link hermetic principles, alchemical operations,
// metals, and chakras through a single planetary key. Planet attributions
// follow the tradition encoded in hermetic.ts (derived from the Kybalion
// and classical Hermetic corpus).
// =============================================================================

export const SEPTENARY: readonly SeptenaryEntry[] = [
  {
    hermeticNumber: 1,
    operationNumber: 5,
    planet: "Mercury",
    metal: "Quicksilver",
    chakraNumber: 4,
  },
  {
    hermeticNumber: 2,
    operationNumber: 1,
    planet: "Moon",
    metal: "Silver",
    chakraNumber: 5,
  },
  {
    hermeticNumber: 3,
    operationNumber: 0,
    planet: "Mars",
    metal: "Iron",
    chakraNumber: 2,
  },
  {
    hermeticNumber: 4,
    operationNumber: 3,
    planet: "Venus",
    metal: "Copper",
    chakraNumber: 3,
  },
  {
    hermeticNumber: 5,
    operationNumber: 6,
    planet: "Jupiter",
    metal: "Tin",
    chakraNumber: 1,
  },
  {
    hermeticNumber: 6,
    operationNumber: 4,
    planet: "Saturn",
    metal: "Lead",
    chakraNumber: 0,
  },
  {
    hermeticNumber: 7,
    operationNumber: 2,
    planet: "Sun",
    metal: "Gold",
    chakraNumber: 6,
  },
] as const;

// =============================================================================
// 3. QUATERNARY CORRESPONDENCES (4-fold, Elemental-Alchemical tradition)
//
// The four classical elements map to the four stages of the alchemical
// Great Work (Magnum Opus), the four cardinal directions, and the four
// seasons. Follows the Aristotelian-Empedoclean system encoded in
// elements.ts and alchemy.ts.
// =============================================================================

export const QUATERNARY: readonly QuaternaryEntry[] = [
  { element: "earth", stageNumber: 0, direction: "North", season: "Winter" },
  { element: "water", stageNumber: 1, direction: "West", season: "Autumn" },
  { element: "air", stageNumber: 2, direction: "East", season: "Spring" },
  { element: "fire", stageNumber: 3, direction: "South", season: "Summer" },
] as const;

// =============================================================================
// 4. ZODIAC ↔ HEBREW SIMPLE LETTERS ↔ ELEMENTS (12-fold, Sefer Yetzirah)
//
// The 12 "simple" Hebrew letters (neither mother nor double) correspond
// to the 12 zodiac signs per the Sefer Yetzirah. Each zodiac sign belongs
// to one of the four elemental triplicities.
// =============================================================================

export const ZODIAC_LETTER: readonly ZodiacLetterEntry[] = [
  { zodiac: "Aries", letterNumber: 5, element: "fire" },
  { zodiac: "Taurus", letterNumber: 6, element: "earth" },
  { zodiac: "Gemini", letterNumber: 7, element: "air" },
  { zodiac: "Cancer", letterNumber: 8, element: "water" },
  { zodiac: "Leo", letterNumber: 9, element: "fire" },
  { zodiac: "Virgo", letterNumber: 10, element: "earth" },
  { zodiac: "Libra", letterNumber: 12, element: "air" },
  { zodiac: "Scorpio", letterNumber: 14, element: "water" },
  { zodiac: "Sagittarius", letterNumber: 15, element: "fire" },
  { zodiac: "Capricorn", letterNumber: 16, element: "earth" },
  { zodiac: "Aquarius", letterNumber: 18, element: "air" },
  { zodiac: "Pisces", letterNumber: 19, element: "water" },
] as const;

// =============================================================================
// 5. IFA ↔ YI JING (computed via shared 6-bit binary pattern)
//
// Both Ifa and Yi Jing are fundamentally binary divination systems.
// The 6 least significant bits of the 8-bit Odu number map to the same
// trigram structure used by Yi Jing (2×3-bit trigrams → 64 hexagrams).
// When both traditions share the same 6-bit pattern, it signals a deep
// structural resonance in the quantum signal.
// =============================================================================

/**
 * Compute the Yi Jing hexagram number corresponding to an Ifa Odu.
 * Extracts the 6 LSBs and constructs the hexagram via 2×3-bit trigrams.
 * Returns the King Wen hexagram number (1-64).
 */
export function getIfaHexagramCorrespondence(oduNumber: number): number {
  const sixBits = oduNumber & 0b111111;
  const lowerTrigramIdx = sixBits & 0b111;
  const upperTrigramIdx = (sixBits >> 3) & 0b111;
  return upperTrigramIdx * 8 + lowerTrigramIdx + 1;
}

// =============================================================================
// 6. GEOMANCY ↔ ELEMENT ↔ PLANET (16-fold)
// 7. RUNES ↔ ELEMENT ↔ SEASON (24-fold)
//
// These correspondences are defined directly on each GeomancyFigure and Rune
// entry in their respective data files (geomancy.ts, runes.ts). The element
// and planet fields are first-class properties on each entry, and seasonal
// correspondences are in the Rune.correspondences bag.
//
// The detection function in esoteric-lookup.ts reads these directly via
// the data lookups — no static table needed here.
// =============================================================================

// =============================================================================
// LOOKUP INDEXES (built at import time for O(1) access)
// =============================================================================

/** Lookup TAROT_PATH_LETTER by tarot arcana number */
export const TAROT_PATH_LETTER_BY_TAROT: Record<
  number,
  TarotPathLetterEntry
> = Object.fromEntries(TAROT_PATH_LETTER.map((e) => [e.tarotNumber, e]));

/** Lookup TAROT_PATH_LETTER by kabbalah path number */
export const TAROT_PATH_LETTER_BY_PATH: Record<
  number,
  TarotPathLetterEntry
> = Object.fromEntries(TAROT_PATH_LETTER.map((e) => [e.pathNumber, e]));

/** Lookup SEPTENARY by hermetic principle number */
export const SEPTENARY_BY_HERMETIC: Record<number, SeptenaryEntry> =
  Object.fromEntries(SEPTENARY.map((e) => [e.hermeticNumber, e]));

/** Lookup SEPTENARY by alchemy operation number */
export const SEPTENARY_BY_OPERATION: Record<number, SeptenaryEntry> =
  Object.fromEntries(SEPTENARY.map((e) => [e.operationNumber, e]));

/** Lookup SEPTENARY by planet name */
export const SEPTENARY_BY_PLANET: Record<string, SeptenaryEntry> =
  Object.fromEntries(SEPTENARY.map((e) => [e.planet, e]));

/** Lookup QUATERNARY by element name */
export const QUATERNARY_BY_ELEMENT: Record<string, QuaternaryEntry> =
  Object.fromEntries(QUATERNARY.map((e) => [e.element, e]));

/** Lookup QUATERNARY by alchemy stage number */
export const QUATERNARY_BY_STAGE: Record<number, QuaternaryEntry> =
  Object.fromEntries(QUATERNARY.map((e) => [e.stageNumber, e]));

/** Lookup ZODIAC_LETTER by zodiac sign name */
export const ZODIAC_LETTER_BY_ZODIAC: Record<string, ZodiacLetterEntry> =
  Object.fromEntries(ZODIAC_LETTER.map((e) => [e.zodiac, e]));
