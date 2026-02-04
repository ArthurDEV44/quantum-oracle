// =============================================================================
// CENTRALIZED TYPES — All 13 traditions (enriched)
// =============================================================================

export type {
  // Shared
  TraditionCorrespondences,
  ElementName,
  ElementBalance,
  HebrewLetterCategory,
  // Yi Jing
  Trigram,
  Hexagram,
  // Tarot
  TarotArcana,
  // Kabbalah
  Sefirah,
  KabbalahPath,
  // Hermeticism
  HermeticPrinciple,
  // Elements
  Element,
  // Ifa
  Odu,
  // Geomancy
  GeomancyFigure,
  // Elder Futhark
  Rune,
  // Alchemy
  AlchemyStage,
  AlchemyOperation,
  // Chakras & Solfege
  Chakra,
  SolfegeFrequency,
  // Gematria
  HebrewLetter,
  // Sacred Geometry
  SacredGeometryReading,
  // Synthesis
  SynthesisReading,
  // Correspondences
  Correspondences,
  CorrespondenceLink,
  Convergence,
} from "./types";

// Sacred Geometry types
export type { SacredConstant } from "./sacred-geometry";

// Synthesis types
export type { CosmicTone } from "./synthesis";

// =============================================================================
// DATA & FUNCTIONS — Existing traditions
// =============================================================================

// I Ching
export { TRIGRAMS, HEXAGRAMS, calculateHexagram } from "./iching";

// Tarot
export { MAJOR_ARCANA } from "./tarot";

// Kabbalah
export { SEFIROT } from "./kabbalah";

// Kabbalah Paths
export { KABBALAH_PATHS } from "./kabbalah-paths";

// Hermetic
export { HERMETIC_PRINCIPLES } from "./hermetic";

// Elements
export { ELEMENTS, calculateElements } from "./elements";

// Sacred Geometry
export { PHI, PI, SQRT2, SILVER_RATIO, FIBONACCI, SACRED_CONSTANTS, calculateSacredGeometry } from "./sacred-geometry";

// Synthesis
export { COSMIC_TONES, calculateSynthesis } from "./synthesis";

// =============================================================================
// DATA — New traditions (stubs, populated by US-007 through US-012)
// =============================================================================

// Ifa
export { ODU } from "./ifa";

// Geomancy
export { GEOMANCY_FIGURES } from "./geomancy";

// Elder Futhark
export { ELDER_FUTHARK } from "./runes";

// Alchemy
export { ALCHEMY_STAGES, ALCHEMY_OPERATIONS } from "./alchemy";

// Chakras & Solfege
export { CHAKRAS, SOLFEGE_FREQUENCIES } from "./chakras";

// Gematria
export { HEBREW_LETTERS } from "./gematria";
