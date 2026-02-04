/**
 * Esoteric Lookup Module
 *
 * Typed, synchronous accessor functions for all 13 esoteric traditions.
 * Each function performs a O(1) lookup into the static TypeScript data.
 * No async, no DB, no cache — pure in-memory access at 0ms.
 */

import {
  // Existing data
  TRIGRAMS,
  HEXAGRAMS,
  MAJOR_ARCANA,
  SEFIROT,
  HERMETIC_PRINCIPLES,
  ELEMENTS,
  // New tradition data (stubs until US-007–012)
  KABBALAH_PATHS,
  ODU,
  GEOMANCY_FIGURES,
  ELDER_FUTHARK,
  ALCHEMY_STAGES,
  ALCHEMY_OPERATIONS,
  CHAKRAS,
  SOLFEGE_FREQUENCIES,
  HEBREW_LETTERS,
} from "@/data/esoteric";

// Yi Jing types (enriched via types.ts re-export)
import type { Trigram, Hexagram } from "@/data/esoteric/iching";
import type { ElementData } from "@/data/esoteric/elements";

// Enriched types from centralized types.ts
import type {
  TarotArcana,
  Sefirah,
  KabbalahPath,
  HermeticPrinciple,
  Odu,
  GeomancyFigure,
  Rune,
  AlchemyStage,
  AlchemyOperation,
  Chakra,
  SolfegeFrequency,
  HebrewLetter,
  Correspondences,
  CorrespondenceLink,
  Convergence,
} from "@/data/esoteric/types";

import type { QuantumEsotericReading } from "@/lib/esoteric";

// =============================================================================
// YI JING
// =============================================================================

/** Lookup a trigram by index (0-7) */
export function getTrigramByIndex(index: number): Trigram {
  const trigram = TRIGRAMS[index];
  if (!trigram) throw new Error(`Trigram not found for index ${index}`);
  return trigram;
}

/** Lookup a hexagram by King Wen number (1-64) */
export function getHexagramByNumber(number: number): Hexagram {
  const hexagram = HEXAGRAMS[number];
  if (!hexagram) throw new Error(`Hexagram not found for number ${number}`);
  return hexagram;
}

// =============================================================================
// TAROT
// =============================================================================

/** Lookup a major arcana by number (0-21) */
export function getTarotArcana(number: number): TarotArcana {
  const arcana = MAJOR_ARCANA[number];
  if (!arcana) throw new Error(`Tarot arcana not found for number ${number}`);
  return arcana;
}

// =============================================================================
// KABBALAH
// =============================================================================

/** Lookup a sefirah by number (1-10) */
export function getSefirah(number: number): Sefirah {
  const sefirah = SEFIROT[number];
  if (!sefirah) throw new Error(`Sefirah not found for number ${number}`);
  return sefirah;
}

/** Lookup a kabbalah path by number (1-22) */
export function getKabbalahPath(number: number): KabbalahPath {
  const path = KABBALAH_PATHS[number];
  if (!path) throw new Error(`Kabbalah path not found for number ${number}`);
  return path;
}

// =============================================================================
// HERMETICISM
// =============================================================================

/** Lookup a hermetic principle by number (1-7) */
export function getHermeticPrinciple(
  number: number,
): HermeticPrinciple {
  const principle = HERMETIC_PRINCIPLES[number];
  if (!principle)
    throw new Error(`Hermetic principle not found for number ${number}`);
  return principle;
}

// =============================================================================
// ELEMENTS
// =============================================================================

/** Lookup a classical element by name */
export function getElement(name: string): ElementData {
  const element = ELEMENTS[name as keyof typeof ELEMENTS];
  if (!element) throw new Error(`Element not found for name "${name}"`);
  return element;
}

// =============================================================================
// IFA
// =============================================================================

/** Lookup an Odu by number (0-255) */
export function getOdu(number: number): Odu {
  const odu = ODU[number];
  if (!odu) throw new Error(`Odu not found for number ${number}`);
  return odu;
}

// =============================================================================
// GEOMANCY
// =============================================================================

/** Lookup a geomantic figure by number (0-15) */
export function getGeomancyFigure(number: number): GeomancyFigure {
  const figure = GEOMANCY_FIGURES[number];
  if (!figure)
    throw new Error(`Geomancy figure not found for number ${number}`);
  return figure;
}

// =============================================================================
// ELDER FUTHARK
// =============================================================================

/** Lookup a rune by number (0-23) */
export function getRune(number: number): Rune {
  const rune = ELDER_FUTHARK[number];
  if (!rune) throw new Error(`Rune not found for number ${number}`);
  return rune;
}

// =============================================================================
// ALCHEMY
// =============================================================================

/** Lookup an alchemical stage by number (0-3) */
export function getAlchemyStage(number: number): AlchemyStage {
  const stage = ALCHEMY_STAGES[number];
  if (!stage) throw new Error(`Alchemy stage not found for number ${number}`);
  return stage;
}

/** Lookup an alchemical operation by number (0-6) */
export function getAlchemyOperation(number: number): AlchemyOperation {
  const operation = ALCHEMY_OPERATIONS[number];
  if (!operation)
    throw new Error(`Alchemy operation not found for number ${number}`);
  return operation;
}

// =============================================================================
// CHAKRAS & SOLFEGE
// =============================================================================

/** Lookup a chakra by number (0-6) */
export function getChakra(number: number): Chakra {
  const chakra = CHAKRAS[number];
  if (!chakra) throw new Error(`Chakra not found for number ${number}`);
  return chakra;
}

/** Lookup a solfege frequency by digital root (3, 6, or 9) */
export function getSolfegeFrequency(digitalRoot: number): SolfegeFrequency {
  const freq = SOLFEGE_FREQUENCIES[digitalRoot];
  if (!freq)
    throw new Error(
      `Solfege frequency not found for digital root ${digitalRoot}`,
    );
  return freq;
}

// =============================================================================
// GEMATRIA
// =============================================================================

/** Lookup a Hebrew letter by number (1-22) */
export function getHebrewLetter(number: number): HebrewLetter {
  const letter = HEBREW_LETTERS[number];
  if (!letter)
    throw new Error(`Hebrew letter not found for number ${number}`);
  return letter;
}

/**
 * Greedy decomposition of a number (0-255) into Hebrew letters.
 *
 * Algorithm: takes the largest letter value possible, descending from 400.
 * Special cases per Hebrew numeral tradition:
 *   - 15 → Tet (9) + Vav (6), NOT Yod (10) + He (5)
 *   - 16 → Tet (9) + Zayin (7), NOT Yod (10) + Vav (6)
 * These avoid spelling divine names (YH, YV).
 *
 * Returns an array of HebrewLetter objects whose numericalValues sum to `value`.
 * Returns empty array if HEBREW_LETTERS data is not yet populated.
 */
export function decomposeGematria(value: number): HebrewLetter[] {
  if (value <= 0) return [];

  // Build sorted list of available letter values from the data
  const letters = Object.values(HEBREW_LETTERS);
  if (letters.length === 0) return [];

  // Index letters by their numerical value for quick lookup
  const byValue = new Map<number, HebrewLetter>();
  for (const letter of letters) {
    byValue.set(letter.numericalValue, letter);
  }

  // Special cases: 15 and 16 use alternative decompositions
  // to avoid spelling divine names
  if (value === 15) {
    const tet = byValue.get(9);
    const vav = byValue.get(6);
    if (tet && vav) return [tet, vav];
  }
  if (value === 16) {
    const tet = byValue.get(9);
    const zayin = byValue.get(7);
    if (tet && zayin) return [tet, zayin];
  }

  // Standard greedy decomposition: largest value first
  const sortedValues = Array.from(byValue.keys()).sort((a, b) => b - a);
  const result: HebrewLetter[] = [];
  let remaining = value;

  for (const letterValue of sortedValues) {
    while (remaining >= letterValue) {
      // Check special cases: avoid creating 15 or 16 as intermediate sums
      // via Yod(10)+He(5) or Yod(10)+Vav(6)
      const wouldLeave = remaining - letterValue;
      if (
        (letterValue === 10 && wouldLeave === 5) ||
        (letterValue === 10 && wouldLeave === 6)
      ) {
        break;
      }

      const letter = byValue.get(letterValue);
      if (letter) {
        result.push(letter);
        remaining -= letterValue;
      }
      if (remaining <= 0) break;
    }
    if (remaining <= 0) break;
  }

  // Handle any remainder left by special-case avoidance (e.g., 15, 16)
  if (remaining > 0) {
    const remainderLetters = decomposeGematriaSimple(
      remaining,
      sortedValues,
      byValue,
    );
    result.push(...remainderLetters);
  }

  return result;
}

/** Simple greedy decomposition without special-case avoidance (for remainders) */
function decomposeGematriaSimple(
  value: number,
  sortedValues: number[],
  byValue: Map<number, HebrewLetter>,
): HebrewLetter[] {
  const result: HebrewLetter[] = [];
  let remaining = value;

  // For remainders of 15 or 16, use the traditional substitution
  if (remaining === 15) {
    const tet = byValue.get(9);
    const vav = byValue.get(6);
    if (tet && vav) return [tet, vav];
  }
  if (remaining === 16) {
    const tet = byValue.get(9);
    const zayin = byValue.get(7);
    if (tet && zayin) return [tet, zayin];
  }

  for (const letterValue of sortedValues) {
    while (remaining >= letterValue) {
      const letter = byValue.get(letterValue);
      if (letter) {
        result.push(letter);
        remaining -= letterValue;
      }
      if (remaining <= 0) break;
    }
    if (remaining <= 0) break;
  }

  return result;
}

// =============================================================================
// CROSS-TRADITION CORRESPONDENCES
// =============================================================================

/**
 * Extract cross-tradition correspondences from a complete reading.
 *
 * Detects convergences (multiple traditions pointing to the same element,
 * planet, or archetype) and direct links between traditions.
 *
 * Full implementation depends on the correspondences data from US-015.
 * Current implementation extracts element-based convergences from the
 * traditions present in the reading.
 */
export function getReadingCorrespondences(
  reading: QuantumEsotericReading,
): Correspondences {
  const links: CorrespondenceLink[] = [];
  const elementSources: Record<string, string[]> = {};

  // Collect element references from each tradition in the reading

  // I Ching trigrams reference elements
  if (reading.iChing?.upperTrigram?.element) {
    const el = reading.iChing.upperTrigram.element.toLowerCase();
    (elementSources[el] ??= []).push(
      `I Ching upper trigram (${reading.iChing.upperTrigram.name})`,
    );
  }
  if (reading.iChing?.lowerTrigram?.element) {
    const el = reading.iChing.lowerTrigram.element.toLowerCase();
    (elementSources[el] ??= []).push(
      `I Ching lower trigram (${reading.iChing.lowerTrigram.name})`,
    );
  }

  // Dominant element
  if (reading.elements?.dominant) {
    const el = reading.elements.dominant.toLowerCase();
    (elementSources[el] ??= []).push("Dominant element");
  }

  // Build convergences from shared elements
  const convergences: Convergence[] = [];
  for (const [element, traditions] of Object.entries(elementSources)) {
    if (traditions.length >= 2) {
      convergences.push({
        archetype: `Element: ${element}`,
        traditions,
      });
    }
  }

  // Build links between traditions that share the same element
  for (const traditions of Object.values(elementSources)) {
    for (let i = 0; i < traditions.length; i++) {
      for (let j = i + 1; j < traditions.length; j++) {
        links.push({
          from: traditions[i],
          to: traditions[j],
          shared: "element",
        });
      }
    }
  }

  return { convergences, links };
}
