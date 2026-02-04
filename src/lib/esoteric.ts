/**
 * Quantum-Esoteric Calculation System
 *
 * Transforms raw quantum entropy into multi-traditional esoteric interpretations.
 * Bridges quantum mechanics with ancient wisdom traditions:
 * - I Ching (Chinese divination, 64 hexagrams)
 * - Tarot Major Arcana (22 archetypes)
 * - Kabbalah Sefirot (10 spheres of the Tree of Life)
 * - Hermetic Principles (7 universal laws)
 * - Four Classical Elements (Earth, Water, Fire, Air)
 * - Sacred Geometry (Golden Ratio/Fibonacci)
 *
 * @see https://en.wikipedia.org/wiki/I_Ching
 * @see https://en.wikipedia.org/wiki/Major_Arcana
 * @see https://en.wikipedia.org/wiki/Sefirot
 * @see https://en.wikipedia.org/wiki/The_Kybalion
 */

import {
  // Data
  TRIGRAMS,
  HEXAGRAMS,
  MAJOR_ARCANA,
  SEFIROT,
  HERMETIC_PRINCIPLES,
  ELEMENTS,
  // Functions
  calculateHexagram,
  calculateElements,
  calculateSacredGeometry,
  calculateSynthesis,
} from "@/data/esoteric";
// Enriched types from data files (re-exported from types.ts)
import type { Trigram } from "@/data/esoteric/iching";
import type { Element, ElementBalance } from "@/data/esoteric/elements";

// =============================================================================
// TYPES
// =============================================================================

export interface QuantumEsotericReading {
  quantum: {
    bytes: number[];
    sum: number;
    average: number;
    variance: number;
  };
  iChing: {
    hexagramNumber: number;
    hexagramName: string;
    hexagramSymbol: string;
    upperTrigram: Trigram;
    lowerTrigram: Trigram;
    meaning: string;
  };
  tarot: {
    arcanaNumber: number;
    arcanaName: string;
    arcanaSymbol: string;
    meaning: string;
    keywords: readonly string[];
  };
  kabbalah: {
    sefirahNumber: number;
    sefirahName: string;
    sefirahHebrew: string;
    meaning: string;
    attribute: string;
  };
  hermetic: {
    principleNumber: number;
    principleName: string;
    axiom: string;
    meaning: string;
  };
  elements: {
    dominant: Element;
    balance: ElementBalance;
    distribution: Record<Element, number>;
  };
  sacredGeometry: {
    phiResonance: number;
    fibonacciAlignment: number;
    harmonicFrequency: string;
  };
  synthesis: {
    energy: number;
    polarity: "yin" | "yang" | "balanced";
    phase: "waxing" | "full" | "waning" | "new";
    cosmicTone: string;
  };
}

// Re-export types for external use
export type { Element, ElementBalance, Trigram };

// =============================================================================
// MAIN CALCULATION FUNCTION
// =============================================================================

/**
 * Calculate complete esoteric reading from quantum bytes
 */
export function calculateEsotericReading(bytes: number[]): QuantumEsotericReading {
  if (bytes.length < 8) {
    throw new Error("At least 8 quantum bytes required for full esoteric reading");
  }

  // Basic quantum calculations
  const sum = bytes.reduce((a, b) => a + b, 0);
  const average = sum / bytes.length;
  const variance =
    bytes.reduce((acc, n) => acc + Math.pow(n / 255 - average / 255, 2), 0) /
    bytes.length;

  // I Ching
  const hexagram = calculateHexagram(bytes);
  const hexagramData = HEXAGRAMS[hexagram.number] || HEXAGRAMS[1];
  const upperTrigram = TRIGRAMS[hexagram.upper] || TRIGRAMS[0];
  const lowerTrigram = TRIGRAMS[hexagram.lower] || TRIGRAMS[0];

  // Tarot (sum modulo 22)
  const arcanaNumber = sum % 22;
  const tarotData = MAJOR_ARCANA[arcanaNumber];

  // Kabbalah (sum modulo 10, +1 for 1-10 range)
  const sefirahNumber = (sum % 10) + 1;
  const sefirahData = SEFIROT[sefirahNumber];

  // Hermetic (sum modulo 7, +1 for 1-7 range)
  const principleNumber = (sum % 7) + 1;
  const hermeticData = HERMETIC_PRINCIPLES[principleNumber];

  // Elements, Sacred Geometry, Synthesis
  const elements = calculateElements(bytes);
  const sacredGeometry = calculateSacredGeometry(bytes);
  const synthesis = calculateSynthesis(bytes);

  return {
    quantum: { bytes, sum, average, variance },
    iChing: {
      hexagramNumber: hexagram.number,
      hexagramName: hexagramData.name,
      hexagramSymbol: hexagramData.symbol,
      upperTrigram,
      lowerTrigram,
      meaning: hexagramData.meaning,
    },
    tarot: {
      arcanaNumber,
      arcanaName: tarotData.name,
      arcanaSymbol: tarotData.symbol,
      meaning: tarotData.meaning,
      keywords: tarotData.keywords,
    },
    kabbalah: {
      sefirahNumber,
      sefirahName: sefirahData.name,
      sefirahHebrew: sefirahData.hebrew,
      meaning: sefirahData.meaning,
      attribute: sefirahData.attribute,
    },
    hermetic: {
      principleNumber,
      principleName: hermeticData.name,
      axiom: hermeticData.axiom,
      meaning: hermeticData.meaning,
    },
    elements,
    sacredGeometry,
    synthesis,
  };
}

/**
 * Generate a concise esoteric summary for the LLM prompt
 */
export function generateEsotericContext(reading: QuantumEsotericReading): string {
  return `[QUANTUM ESOTERIC READING]
Energy: ${Math.round(reading.synthesis.energy * 100)}% (${reading.synthesis.polarity}, ${reading.synthesis.phase} phase)
Cosmic Tone: ${reading.synthesis.cosmicTone}

I Ching: ${reading.iChing.hexagramSymbol} ${reading.iChing.hexagramName} (#${reading.iChing.hexagramNumber})
→ ${reading.iChing.meaning}

Tarot: ${reading.tarot.arcanaSymbol} ${reading.tarot.arcanaName} (#${reading.tarot.arcanaNumber})
→ ${reading.tarot.meaning}

Kabbalah: ${reading.kabbalah.sefirahName} (${reading.kabbalah.sefirahHebrew})
→ ${reading.kabbalah.meaning}

Hermetic Principle: ${reading.hermetic.principleName}
→ "${reading.hermetic.axiom}"

Elements: ${reading.elements.dominant.toUpperCase()} dominant (${ELEMENTS[reading.elements.dominant].qualities})
Sacred Geometry: ${reading.sacredGeometry.harmonicFrequency} (Phi resonance: ${(reading.sacredGeometry.phiResonance * 100).toFixed(1)}%)`;
}
