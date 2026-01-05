export interface QuantumData {
  numbers: number[];
  timestamp: string;
  source: string;
  energy?: number;
  category?: string;
}

export interface EsotericReading {
  iChing: {
    hexagram: number;
    name: string;
    symbol: string;
    meaning: string;
  };
  tarot: {
    arcana: number;
    name: string;
    symbol: string;
    keywords: string[];
  };
  kabbalah: {
    sefirah: number;
    name: string;
    hebrew: string;
    attribute: string;
  };
  hermetic: {
    principle: number;
    name: string;
    axiom: string;
  };
  elements: {
    dominant: string;
    balance: {
      physical: number;
      spiritual: number;
      passive: number;
      active: number;
    };
  };
  sacredGeometry: {
    phiResonance: number;
    harmonicFrequency: string;
  };
  synthesis: {
    energy: number;
    polarity: string;
    phase: string;
    cosmicTone: string;
  };
}
