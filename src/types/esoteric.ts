export interface QuantumData {
  numbers: number[];
  timestamp: string;
  source: string;
  energy?: number;
  category?: string;
  variance?: number;
}

export interface EsotericReading {
  iChing: {
    hexagram: number;
    name: string;
    symbol: string;
    meaning: string;
    upperTrigram?: { name: string; symbol: string; element: string };
    lowerTrigram?: { name: string; symbol: string; element: string };
    mutatingLines?: boolean[];
    transformedHexagram?: number | null;
    transformedHexagramName?: string | null;
    transformedHexagramSymbol?: string | null;
  };
  tarot: {
    arcana: number;
    name: string;
    symbol: string;
    keywords: string[];
    meaning?: string;
  };
  kabbalah: {
    sefirah: number;
    name: string;
    hebrew: string;
    attribute: string;
    meaning?: string;
    pathNumber?: number | null;
    pathLetterName?: string | null;
    pathMeaning?: string | null;
  };
  hermetic: {
    principle: number;
    name: string;
    axiom: string;
    meaning?: string;
  };
  elements: {
    dominant: string;
    balance: {
      physical: number;
      spiritual: number;
      passive: number;
      active: number;
    };
    distribution?: Record<string, number>;
  };
  sacredGeometry: {
    phiResonance: number;
    harmonicFrequency: string;
    fibonacciAlignment?: number;
  };
  synthesis: {
    energy: number;
    polarity: string;
    phase: string;
    cosmicTone: string;
  };
  // New traditions (optional for backward compat with old 8-byte consultations)
  ifa?: {
    odu: number;
    name: string;
    meaning: string;
    proverb: string;
    orisha: string;
    element?: string;
  };
  geomancy?: {
    figure1: string;
    figure2: string;
    judge: string;
    element: string;
    planet: string;
    figure1Number?: number;
    figure2Number?: number;
    judgeNumber?: number;
  };
  runes?: {
    rune: number;
    name: string;
    glyph: string;
    meaning: string;
    orientation: string;
    aett: number;
    element?: string;
    deity?: string;
  };
  alchemy?: {
    stage: string;
    stageLatin?: string;
    stageColor?: string;
    operation: string;
    operationLatin?: string;
    planet: string;
  };
  chakras?: {
    chakra: number;
    name: string;
    nameFrench?: string;
    frequency: number;
    mantra: string;
    color?: string;
    element?: string;
  };
  gematria?: {
    value: number;
    sacredWord: string;
    letters: Array<{ letter: string; name: string; numericalValue: number }>;
  };
  correspondences?: {
    convergences: Array<{ archetype: string; traditions: string[] }>;
    links: Array<{ from: string; to: string; shared: string }>;
  };
}
