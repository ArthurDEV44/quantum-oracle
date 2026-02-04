/**
 * Four Classical Elements — Enriched
 *
 * The Aristotelian-Empedoclean system of four elements (Earth, Water, Fire, Air)
 * with their traditional qualities (Aristotle's hot/cold × dry/wet), cardinal
 * directions, seasons, Hippocratic temperaments, zodiacal triplicities, and
 * cross-tradition correspondences (chakras, Sefirot, planets).
 */

import type { TraditionCorrespondences } from "./types";

export type Element = "earth" | "water" | "fire" | "air";

export interface ElementData {
  symbol: string;
  qualities: string;
  direction: string;
  season: string;
  temperament: string;
  zodiacSigns: readonly string[];
  correspondences: TraditionCorrespondences;
}

export interface ElementBalance {
  physical: number;
  spiritual: number;
  passive: number;
  active: number;
}

export const ELEMENTS: Record<Element, ElementData> = {
  fire: {
    symbol: "\u{1F702}",
    qualities: "Hot and Dry — energy, passion, transformation, will, purification",
    direction: "South",
    season: "Summer",
    temperament: "Choleric",
    zodiacSigns: ["Aries", "Leo", "Sagittarius"],
    correspondences: {
      planet: "Mars, Sun",
      metal: "Iron, Gold",
      chakra: "Manipura (Solar Plexus)",
      sefirot: "Netzach, Geburah",
      alchemicalPrinciple: "Sulphur (active principle)",
      humor: "Yellow Bile",
      tarotSuit: "Wands",
      timeOfDay: "Noon",
      stageOfLife: "Youth",
      geometricForm: "Tetrahedron",
      platonic: "Tetrahedron (4 faces — the simplest, most dynamic solid)",
      hermeticPrinciple: "Vibration",
    },
  },
  water: {
    symbol: "\u{1F704}",
    qualities: "Cold and Wet — emotion, intuition, flow, receptivity, purification",
    direction: "West",
    season: "Autumn",
    temperament: "Phlegmatic",
    zodiacSigns: ["Cancer", "Scorpio", "Pisces"],
    correspondences: {
      planet: "Moon, Neptune",
      metal: "Silver",
      chakra: "Svadhisthana (Sacral)",
      sefirot: "Yesod, Chesed",
      alchemicalPrinciple: "Mercury (fluid principle)",
      humor: "Phlegm",
      tarotSuit: "Cups",
      timeOfDay: "Dusk",
      stageOfLife: "Maturity",
      geometricForm: "Icosahedron",
      platonic: "Icosahedron (20 faces — the most spherical, flowing solid)",
      hermeticPrinciple: "Rhythm",
    },
  },
  air: {
    symbol: "\u{1F701}",
    qualities: "Hot and Wet — intellect, communication, movement, thought, freedom",
    direction: "East",
    season: "Spring",
    temperament: "Sanguine",
    zodiacSigns: ["Gemini", "Libra", "Aquarius"],
    correspondences: {
      planet: "Mercury, Jupiter",
      metal: "Quicksilver, Tin",
      chakra: "Anahata (Heart)",
      sefirot: "Tiferet, Hod",
      alchemicalPrinciple: "Mercury (volatile principle)",
      humor: "Blood",
      tarotSuit: "Swords",
      timeOfDay: "Dawn",
      stageOfLife: "Childhood",
      geometricForm: "Octahedron",
      platonic: "Octahedron (8 faces — balanced, mediating between fire and water)",
      hermeticPrinciple: "Correspondence",
    },
  },
  earth: {
    symbol: "\u{1F703}",
    qualities: "Cold and Dry — stability, grounding, material form, endurance, fertility",
    direction: "North",
    season: "Winter",
    temperament: "Melancholic",
    zodiacSigns: ["Taurus", "Virgo", "Capricorn"],
    correspondences: {
      planet: "Saturn, Venus",
      metal: "Lead, Copper",
      chakra: "Muladhara (Root)",
      sefirot: "Malkuth",
      alchemicalPrinciple: "Salt (fixed principle)",
      humor: "Black Bile",
      tarotSuit: "Pentacles",
      timeOfDay: "Midnight",
      stageOfLife: "Old Age",
      geometricForm: "Hexahedron",
      platonic: "Hexahedron / Cube (6 faces — the most stable, grounded solid)",
      hermeticPrinciple: "Cause and Effect",
    },
  },
} as const;

/**
 * Calculate elemental distribution from quantum bytes
 */
export function calculateElements(bytes: number[]): {
  dominant: Element;
  balance: ElementBalance;
  distribution: Record<Element, number>;
} {
  const values = {
    earth: bytes[0] ?? 0,
    water: bytes[1] ?? 0,
    fire: bytes[2] ?? 0,
    air: bytes[3] ?? 0,
  };

  const total = Object.values(values).reduce((a, b) => a + b, 0) || 1;

  const distribution: Record<Element, number> = {
    earth: values.earth / total,
    water: values.water / total,
    fire: values.fire / total,
    air: values.air / total,
  };

  const dominant = (Object.entries(distribution) as [Element, number][]).sort(
    (a, b) => b[1] - a[1]
  )[0][0];

  const balance: ElementBalance = {
    physical: distribution.earth + distribution.water,
    spiritual: distribution.fire + distribution.air,
    passive: distribution.earth + distribution.water,
    active: distribution.fire + distribution.air,
  };

  return { dominant, balance, distribution };
}
