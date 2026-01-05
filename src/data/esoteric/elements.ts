/**
 * Four Classical Elements
 * Compact format with calculation functions
 */

export type Element = "earth" | "water" | "fire" | "air";

export interface ElementData {
  symbol: string;
  qualities: string;
  direction: string;
}

export interface ElementBalance {
  physical: number;
  spiritual: number;
  passive: number;
  active: number;
}

export const ELEMENTS: Record<Element, ElementData> = {
  earth: { symbol: "🜃", qualities: "Stability, grounding, material", direction: "North" },
  water: { symbol: "🜄", qualities: "Emotion, intuition, flow", direction: "West" },
  fire: { symbol: "🜂", qualities: "Energy, passion, transformation", direction: "South" },
  air: { symbol: "🜁", qualities: "Intellect, communication, movement", direction: "East" },
};

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
