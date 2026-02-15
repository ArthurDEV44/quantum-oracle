/**
 * Quantum-Esoteric Calculation System — Bit-Native Engine
 *
 * Transforms raw quantum entropy into multi-traditional esoteric interpretations.
 * Each tradition is addressed by a dedicated slice of bits from the 16 QRNG bytes,
 * at its native binary scale. No destructive modulo — the quantum signal's binary
 * structure is preserved.
 *
 * BIT ALLOCATION PLAN (16 bytes = 128 bits)
 * ==========================================
 * Each tradition receives dedicated bits. No bit is shared between discrete
 * traditions. Continuous traditions (Elements, Sacred Geometry, Synthesis) use
 * full byte values from their dedicated octets.
 *
 * Byte 0       [bits   0-  7]  (8 bits) : Ifa — 256 Odu (1:1 mapping)
 * Byte 1:0-5   [bits   8- 13]  (6 bits) : Yi Jing — hexagram (2×3-bit trigrams → 64)
 * Byte 1:6-7 +
 *   Byte 2:0-3 [bits  14- 19]  (6 bits) : Yi Jing — mutating lines (1 bit per line)
 * Byte 2:4-7   [bits  20- 23]  (4 bits) : Geomancy — mother figure 1 (16)
 * Byte 3:0-3   [bits  24- 27]  (4 bits) : Geomancy — mother figure 2 (16)
 * Byte 3:4-7 +
 *   Byte 4:0   [bits  28- 32]  (5 bits) : Tarot — major arcana (scaled 32→22)
 * Byte 4:1-5   [bits  33- 37]  (5 bits) : Kabbalah — Sefirot(0-9) + Paths(10-31)
 * Byte 4:6-7 +
 *   Byte 5:0   [bits  38- 40]  (3 bits) : Hermeticism — principle (scaled 8→7)
 * Byte 5:1-5   [bits  41- 45]  (5 bits) : Elder Futhark — rune (scaled 32→24)
 * Byte 5:6     [bit   46    ]  (1 bit)  : Elder Futhark — orientation (0=upright, 1=merkstave)
 * Byte 5:7 +
 *   Byte 6:0-1 [bits  47- 49]  (3 bits) : Alchemy — stage (scaled 8→4)
 * Byte 6:2-4   [bits  50- 52]  (3 bits) : Alchemy — operation (scaled 8→7)
 * Byte 6:5-7   [bits  53- 55]  (3 bits) : Chakra (scaled 8→7)
 * Byte 7       [bits  56- 63]  (8 bits) : Gematria — raw value → Hebrew letter decomposition
 * Bytes 8-11   [bits  64- 95] (32 bits) : Elements — 1 byte per element, proportional
 * Bytes 12-13  [bits  96-111] (16 bits) : Sacred Geometry — consecutive ratios vs Phi
 * Bytes 14-15  [bits 112-127] (16 bits) : Synthesis — energy, polarity, phase, cosmic tone
 *
 * For traditions with non-power-of-2 cardinality (Tarot 22, Runes 24, Hermeticism 7,
 * Alchemy operation 7, Chakra 7), the mapping uses uniform scaling:
 *   Math.floor(rawValue * targetSize / 2^bits)
 * This avoids the bias of simple modulo. Residual bias is <3.1% for 5-bit fields.
 */

import {
  TRIGRAMS,
  HEXAGRAMS,
  MAJOR_ARCANA,
  SEFIROT,
  HERMETIC_PRINCIPLES,
  ELEMENTS,
  KABBALAH_PATHS,
  ODU,
  GEOMANCY_FIGURES,
  ELDER_FUTHARK,
  ALCHEMY_STAGES,
  ALCHEMY_OPERATIONS,
  CHAKRAS,
  PHI,
  FIBONACCI,
  COSMIC_TONES,
  calculateElements,
} from "@/data/esoteric";
import {
  decomposeGematria,
  getReadingCorrespondences,
} from "@/lib/esoteric-lookup";
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
    mutatingLines: boolean[];
    transformedHexagramNumber: number | null;
    transformedHexagramName: string | null;
    transformedHexagramSymbol: string | null;
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
    pathNumber: number | null;
    pathLetterName: string | null;
    pathMeaning: string | null;
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
  ifa: {
    oduNumber: number;
    oduName: string;
    meaning: string;
    proverb: string;
    orisha: string;
    element: string;
  };
  geomancy: {
    figure1Number: number;
    figure1Name: string;
    figure2Number: number;
    figure2Name: string;
    judgeNumber: number;
    judgeName: string;
    element: string;
    planet: string;
  };
  runes: {
    runeNumber: number;
    runeName: string;
    runeGlyph: string;
    meaning: string;
    orientation: "upright" | "merkstave";
    aettNumber: number;
    element: string;
    deity: string;
  };
  alchemy: {
    stageNumber: number;
    stageName: string;
    stageLatin: string;
    stageColor: string;
    operationNumber: number;
    operationName: string;
    operationLatin: string;
    planet: string;
  };
  chakras: {
    chakraNumber: number;
    chakraNameSanskrit: string;
    chakraNameFrench: string;
    color: string;
    element: string;
    mantra: string;
    solfegeFrequencyHz: number;
  };
  gematria: {
    value: number;
    sacredWord: string;
    letters: Array<{ letter: string; name: string; numericalValue: number }>;
  };
}

// Re-export types for external use
export type { Element, ElementBalance, Trigram };

// =============================================================================
// BIT EXTRACTION UTILITIES
// =============================================================================

/**
 * Extract N bits from a byte array starting at a global bit position.
 *
 * Bits are numbered big-endian at the byte level:
 *   bit 0 = MSB of byte 0, bit 7 = LSB of byte 0,
 *   bit 8 = MSB of byte 1, etc.
 *
 * Handles cross-byte boundaries transparently.
 */
export function extractBits(
  bytes: number[],
  startBit: number,
  numBits: number,
): number {
  let result = 0;
  for (let i = 0; i < numBits; i++) {
    const bitPos = startBit + i;
    const byteIdx = bitPos >> 3;
    const bitShift = 7 - (bitPos & 7);
    result = (result << 1) | ((bytes[byteIdx] >> bitShift) & 1);
  }
  return result;
}

/**
 * Scale a raw bit value to a target range using uniform scaling.
 * Maps [0, 2^bits - 1] → [0, targetSize - 1] uniformly.
 *
 * Avoids the bias of simple modulo. Residual bias < 100/2^bits %
 * (e.g., <3.1% for 5-bit fields, <12.5% for 3-bit fields).
 */
function scaleBits(
  rawValue: number,
  numBits: number,
  targetSize: number,
): number {
  return Math.floor((rawValue * targetSize) / (1 << numBits));
}

// =============================================================================
// MAIN CALCULATION FUNCTION
// =============================================================================

/**
 * Calculate complete esoteric reading from 16 quantum bytes using bit-native mapping.
 *
 * Each tradition is addressed by dedicated bits at its native binary scale.
 * No destructive modulo — the quantum signal's binary structure is preserved.
 */
export function calculateEsotericReading(
  bytes: number[],
): QuantumEsotericReading {
  if (bytes.length < 16) {
    throw new Error(
      "At least 16 quantum bytes required for full esoteric reading",
    );
  }

  // ---------------------------------------------------------------------------
  // Quantum statistics (full 16 bytes)
  // ---------------------------------------------------------------------------
  const sum = bytes.reduce((a, b) => a + b, 0);
  const average = sum / bytes.length;
  const variance =
    bytes.reduce((acc, n) => acc + Math.pow(n / 255 - average / 255, 2), 0) /
    bytes.length;

  // ---------------------------------------------------------------------------
  // IFA — Byte 0 (8 bits → 256 Odu, 1:1 mapping)
  // ---------------------------------------------------------------------------
  const oduNumber = bytes[0];
  const oduData = ODU[oduNumber];

  // ---------------------------------------------------------------------------
  // YI JING — Bits 8-13 (6 bits → 64 hexagrams via 2×3-bit trigrams)
  //           Bits 14-19 (6 bits → mutating lines, 1 bit per line)
  // ---------------------------------------------------------------------------
  const hexagramRaw = extractBits(bytes, 8, 6);
  const lowerTrigramIdx = hexagramRaw & 0b111;
  const upperTrigramIdx = (hexagramRaw >> 3) & 0b111;
  const hexagramNumber = upperTrigramIdx * 8 + lowerTrigramIdx + 1;
  const hexagramData = HEXAGRAMS[hexagramNumber] || HEXAGRAMS[1];
  const upperTrigram = TRIGRAMS[upperTrigramIdx] || TRIGRAMS[0];
  const lowerTrigram = TRIGRAMS[lowerTrigramIdx] || TRIGRAMS[0];

  const mutatingLinesRaw = extractBits(bytes, 14, 6);
  const mutatingLines: boolean[] = [];
  for (let i = 5; i >= 0; i--) {
    mutatingLines.push(((mutatingLinesRaw >> i) & 1) === 1);
  }

  let transformedHexagramNumber: number | null = null;
  let transformedHexagramName: string | null = null;
  let transformedHexagramSymbol: string | null = null;
  if (mutatingLines.some((m) => m)) {
    const transformedRaw = hexagramRaw ^ mutatingLinesRaw;
    const tLower = transformedRaw & 0b111;
    const tUpper = (transformedRaw >> 3) & 0b111;
    transformedHexagramNumber = tUpper * 8 + tLower + 1;
    const tData = HEXAGRAMS[transformedHexagramNumber] || HEXAGRAMS[1];
    transformedHexagramName = tData.name;
    transformedHexagramSymbol = tData.symbol;
  }

  // ---------------------------------------------------------------------------
  // GEOMANCY — Bits 20-23 (4 bits → figure 1), Bits 24-27 (4 bits → figure 2)
  //            Judge = figure1 XOR figure2 (GF(2)^4)
  // ---------------------------------------------------------------------------
  const figure1Number = extractBits(bytes, 20, 4);
  const figure2Number = extractBits(bytes, 24, 4);
  const judgeNumber = figure1Number ^ figure2Number;
  const figure1 = GEOMANCY_FIGURES[figure1Number];
  const figure2 = GEOMANCY_FIGURES[figure2Number];
  const judge = GEOMANCY_FIGURES[judgeNumber];

  // ---------------------------------------------------------------------------
  // TAROT — Bits 28-32 (5 bits → scaled 32→22 major arcana)
  // ---------------------------------------------------------------------------
  const tarotRaw = extractBits(bytes, 28, 5);
  const arcanaNumber = scaleBits(tarotRaw, 5, 22);
  const tarotData = MAJOR_ARCANA[arcanaNumber];

  // ---------------------------------------------------------------------------
  // KABBALAH — Bits 33-37 (5 bits → 0-31: 0-9 Sefirot, 10-31 Paths)
  // ---------------------------------------------------------------------------
  const kabbRaw = extractBits(bytes, 33, 5);
  let sefirahNumber: number;
  let pathNumber: number | null = null;
  let pathLetterName: string | null = null;
  let pathMeaning: string | null = null;

  if (kabbRaw <= 9) {
    sefirahNumber = kabbRaw + 1;
  } else {
    pathNumber = kabbRaw - 9;
    const pathData = KABBALAH_PATHS[pathNumber];
    pathLetterName = pathData?.letterName ?? null;
    pathMeaning = pathData?.meaning ?? null;
    sefirahNumber = pathData?.fromSefirahNumber ?? 1;
  }
  const sefirahData = SEFIROT[sefirahNumber];

  // ---------------------------------------------------------------------------
  // HERMETICISM — Bits 38-40 (3 bits → scaled 8→7 principles)
  // ---------------------------------------------------------------------------
  const hermeticRaw = extractBits(bytes, 38, 3);
  const principleNumber = scaleBits(hermeticRaw, 3, 7) + 1;
  const hermeticData = HERMETIC_PRINCIPLES[principleNumber];

  // ---------------------------------------------------------------------------
  // ELDER FUTHARK — Bits 41-45 (5 bits → scaled 32→24 runes)
  //                 Bit 46 (orientation: 0=upright, 1=merkstave)
  // ---------------------------------------------------------------------------
  const runeRaw = extractBits(bytes, 41, 5);
  const runeNumber = scaleBits(runeRaw, 5, 24);
  const orientationBit = extractBits(bytes, 46, 1);
  const runeData = ELDER_FUTHARK[runeNumber];
  const isReversed = orientationBit === 1 && (runeData?.isReversible ?? true);

  // ---------------------------------------------------------------------------
  // ALCHEMY — Bits 47-49 (3 bits → scaled 8→4 stages)
  //           Bits 50-52 (3 bits → scaled 8→7 operations)
  // ---------------------------------------------------------------------------
  const stageRaw = extractBits(bytes, 47, 3);
  const stageNumber = scaleBits(stageRaw, 3, 4);
  const operationRaw = extractBits(bytes, 50, 3);
  const operationNumber = scaleBits(operationRaw, 3, 7);
  const stageData = ALCHEMY_STAGES[stageNumber];
  const operationData = ALCHEMY_OPERATIONS[operationNumber];

  // ---------------------------------------------------------------------------
  // CHAKRA — Bits 53-55 (3 bits → scaled 8→7 chakras)
  // ---------------------------------------------------------------------------
  const chakraRaw = extractBits(bytes, 53, 3);
  const chakraNumber = scaleBits(chakraRaw, 3, 7);
  const chakraData = CHAKRAS[chakraNumber];

  // ---------------------------------------------------------------------------
  // GEMATRIA — Byte 7 (8 bits → raw value decomposed into Hebrew letters)
  // ---------------------------------------------------------------------------
  const gematriaValue = bytes[7];
  const hebrewLetters = decomposeGematria(gematriaValue);

  // ---------------------------------------------------------------------------
  // ELEMENTS — Bytes 8-11 (1 byte per element, proportional distribution)
  // ---------------------------------------------------------------------------
  const elements = calculateElements(bytes.slice(8, 12));

  // ---------------------------------------------------------------------------
  // SACRED GEOMETRY — Bytes 12-13 (consecutive ratio vs Phi)
  // ---------------------------------------------------------------------------
  const sgByte0 = bytes[12];
  const sgByte1 = bytes[13];
  const sgMin = Math.min(sgByte0, sgByte1) || 1;
  const sgMax = Math.max(sgByte0, sgByte1);
  const sgRatio = sgMax / sgMin;
  const phiResonance = 1 - Math.min(Math.abs(sgRatio - PHI) / PHI, 1);
  const sgAverage = (sgByte0 + sgByte1) / 2;
  const fibonacciAlignment = FIBONACCI.reduce((closest, fib) =>
    Math.abs(fib - sgAverage) < Math.abs(closest - sgAverage) ? fib : closest,
  );
  const harmonicFrequency =
    phiResonance > 0.8
      ? "Divine harmony - strong cosmic alignment"
      : phiResonance > 0.6
        ? "High resonance - favorable universal flow"
        : phiResonance > 0.4
          ? "Balanced vibration - neutral cosmic state"
          : phiResonance > 0.2
            ? "Low resonance - introspective energy"
            : "Chaotic vibration - transformative potential";

  // ---------------------------------------------------------------------------
  // SYNTHESIS — Bytes 14-15 (energy, polarity, phase, cosmic tone)
  // ---------------------------------------------------------------------------
  const synthByte0 = bytes[14];
  const synthByte1 = bytes[15];
  const energy = (synthByte0 + synthByte1) / 510;
  const polarityDiff = synthByte0 - synthByte1;
  const polarity: "yin" | "yang" | "balanced" =
    polarityDiff > 32 ? "yang" : polarityDiff < -32 ? "yin" : "balanced";
  const phase: "waxing" | "full" | "waning" | "new" =
    energy < 0.25
      ? "new"
      : energy < 0.5
        ? "waxing"
        : energy < 0.75
          ? "full"
          : "waning";
  const toneKey = `${polarity}-${phase}`;
  const tone = COSMIC_TONES[toneKey];
  const cosmicTone = tone?.description ?? "Unknown resonance";

  // ---------------------------------------------------------------------------
  // ASSEMBLE READING
  // ---------------------------------------------------------------------------
  return {
    quantum: { bytes, sum, average, variance },
    iChing: {
      hexagramNumber,
      hexagramName: hexagramData.name,
      hexagramSymbol: hexagramData.symbol,
      upperTrigram,
      lowerTrigram,
      meaning: hexagramData.meaning,
      mutatingLines,
      transformedHexagramNumber,
      transformedHexagramName,
      transformedHexagramSymbol,
    },
    tarot: {
      arcanaNumber,
      arcanaName: tarotData?.name ?? `Arcana ${arcanaNumber}`,
      arcanaSymbol: tarotData?.symbol ?? "",
      meaning: tarotData?.meaning ?? "",
      keywords: tarotData?.keywords ?? [],
    },
    kabbalah: {
      sefirahNumber,
      sefirahName: sefirahData?.name ?? `Sefirah ${sefirahNumber}`,
      sefirahHebrew: sefirahData?.hebrew ?? "",
      meaning: sefirahData?.meaning ?? "",
      attribute: sefirahData?.attribute ?? "",
      pathNumber,
      pathLetterName,
      pathMeaning,
    },
    hermetic: {
      principleNumber,
      principleName: hermeticData?.name ?? `Principle ${principleNumber}`,
      axiom: hermeticData?.axiom ?? "",
      meaning: hermeticData?.meaning ?? "",
    },
    elements,
    sacredGeometry: { phiResonance, fibonacciAlignment, harmonicFrequency },
    synthesis: { energy, polarity, phase, cosmicTone },
    ifa: {
      oduNumber,
      oduName: oduData?.name ?? `Odu ${oduNumber}`,
      meaning: oduData?.meaning ?? "",
      proverb: oduData?.proverbs?.[0] ?? "",
      orisha: oduData?.orisha ?? "",
      element: oduData?.element ?? "",
    },
    geomancy: {
      figure1Number,
      figure1Name: figure1?.nameLatin ?? `Figure ${figure1Number}`,
      figure2Number,
      figure2Name: figure2?.nameLatin ?? `Figure ${figure2Number}`,
      judgeNumber,
      judgeName: judge?.nameLatin ?? `Figure ${judgeNumber}`,
      element: judge?.element ?? "",
      planet: judge?.planet ?? "",
    },
    runes: {
      runeNumber,
      runeName: runeData?.name ?? `Rune ${runeNumber}`,
      runeGlyph: runeData?.glyph ?? "",
      meaning: isReversed
        ? (runeData?.merkstaveMeaning ?? "")
        : (runeData?.meaning ?? ""),
      orientation: isReversed ? "merkstave" : "upright",
      aettNumber: runeData?.aettNumber ?? 1,
      element: runeData?.element ?? "",
      deity: runeData?.deity ?? "",
    },
    alchemy: {
      stageNumber,
      stageName: stageData?.name ?? `Stage ${stageNumber}`,
      stageLatin: stageData?.latinName ?? "",
      stageColor: stageData?.color ?? "",
      operationNumber,
      operationName: operationData?.name ?? `Operation ${operationNumber}`,
      operationLatin: operationData?.latinName ?? "",
      planet: operationData?.planet ?? "",
    },
    chakras: {
      chakraNumber,
      chakraNameSanskrit: chakraData?.nameSanskrit ?? `Chakra ${chakraNumber}`,
      chakraNameFrench: chakraData?.nameFrench ?? "",
      color: chakraData?.color ?? "",
      element: chakraData?.element ?? "",
      mantra: chakraData?.mantra ?? "",
      solfegeFrequencyHz: chakraData?.solfegeFrequency ?? 0,
    },
    gematria: {
      value: gematriaValue,
      sacredWord: hebrewLetters.map((l) => l.letter).join(""),
      letters: hebrewLetters.map((l) => ({
        letter: l.letter,
        name: l.name,
        numericalValue: l.numericalValue,
      })),
    },
  };
}

// =============================================================================
// LLM CONTEXT GENERATION
// =============================================================================

/** Context richness level for the LLM prompt */
export type ContextLevel = "rich" | "condensed";

/**
 * Generate an esoteric summary for the LLM prompt.
 *
 * Hierarchization exploiting the U-shaped attention curve ("Lost in the Middle"):
 *   1. Convergences croisées (start — high attention)
 *   2. Individual traditions (middle)
 *   3. (Caller adds consultant's question at the end — high attention)
 *
 * @param reading  — The complete quantum-esoteric reading
 * @param level    — "rich" (~2500 tokens, ~100 words per tradition) or
 *                   "condensed" (compact summary, ~50 words per tradition).
 *                   Defaults to "rich" for Mistral Small API (128K context).
 */
export function generateEsotericContext(
  reading: QuantumEsotericReading,
  level: ContextLevel = "rich",
): string {
  const sections: string[] = [];
  const isRich = level === "rich";
  const meaningLen = isRich ? 300 : 200;
  const proverbLen = isRich ? 200 : 150;

  // -------------------------------------------------------------------------
  // 1. CONVERGENCES (start of prompt — high attention zone)
  // -------------------------------------------------------------------------
  const correspondences = getReadingCorrespondences(reading);

  if (
    correspondences.convergences.length > 0 ||
    correspondences.links.length > 0
  ) {
    sections.push("[CONVERGENCES CROISÉES]");

    for (const conv of correspondences.convergences) {
      sections.push(
        `★ ${conv.archetype} — ${conv.traditions.length} traditions convergent : ${conv.traditions.join(", ")}`,
      );
    }

    for (const link of correspondences.links) {
      sections.push(`↔ ${link.from} ↔ ${link.to} — ${link.shared}`);
    }

    sections.push("");
  }

  // -------------------------------------------------------------------------
  // 2. SYNTHESIS (energy state frames the reading)
  // -------------------------------------------------------------------------
  sections.push(
    "[LECTURE QUANTIQUE ÉSOTÉRIQUE]",
    `Énergie: ${Math.round(reading.synthesis.energy * 100)}% (${reading.synthesis.polarity}, phase ${reading.synthesis.phase})`,
    `Tonalité cosmique: ${reading.synthesis.cosmicTone}`,
    "",
  );

  // -------------------------------------------------------------------------
  // 3. DIVINATORY TRADITIONS
  // -------------------------------------------------------------------------

  // Yi Jing
  sections.push(
    `Yi Jing: ${reading.iChing.hexagramSymbol} ${reading.iChing.hexagramName} (#${reading.iChing.hexagramNumber})`,
    `→ ${reading.iChing.meaning.slice(0, meaningLen)}`,
  );

  if (reading.iChing.mutatingLines.some((m) => m)) {
    const mutLines = reading.iChing.mutatingLines
      .map((m, i) => (m ? i + 1 : null))
      .filter(Boolean)
      .join(", ");
    sections.push(`→ Lignes mutantes: ${mutLines}`);
    if (reading.iChing.transformedHexagramName) {
      sections.push(
        `→ Transformation: ${reading.iChing.transformedHexagramSymbol} ${reading.iChing.transformedHexagramName} (#${reading.iChing.transformedHexagramNumber})`,
      );
    }
  }

  sections.push("");

  // Ifa
  sections.push(
    `Ifa: ${reading.ifa.oduName} (Odu #${reading.ifa.oduNumber})`,
    `→ ${reading.ifa.meaning.slice(0, meaningLen)}`,
  );
  if (reading.ifa.proverb) {
    sections.push(`→ Proverbe: « ${reading.ifa.proverb.slice(0, proverbLen)} »`);
  }
  if (isRich && reading.ifa.orisha) {
    sections.push(`→ Orisha: ${reading.ifa.orisha}`);
  }
  sections.push("");

  // Geomancy
  sections.push(
    `Géomancie: ${reading.geomancy.figure1Name} + ${reading.geomancy.figure2Name} → Juge: ${reading.geomancy.judgeName}`,
    `→ Élément: ${reading.geomancy.element}, Planète: ${reading.geomancy.planet}`,
    "",
  );

  // Runes
  sections.push(
    `Rune: ${reading.runes.runeGlyph} ${reading.runes.runeName} (${reading.runes.orientation === "upright" ? "droite" : "inversée"}, Aett ${reading.runes.aettNumber})`,
    `→ ${reading.runes.meaning.slice(0, meaningLen)}`,
  );
  if (isRich) {
    sections.push(
      `→ Élément: ${reading.runes.element}, Divinité: ${reading.runes.deity}`,
    );
  }
  sections.push("");

  // -------------------------------------------------------------------------
  // 4. ESOTERIC WISDOM
  // -------------------------------------------------------------------------

  // Tarot
  sections.push(
    `Tarot: ${reading.tarot.arcanaSymbol} ${reading.tarot.arcanaName} (#${reading.tarot.arcanaNumber})`,
    `→ ${reading.tarot.meaning.slice(0, meaningLen)}`,
  );
  if (isRich && reading.tarot.keywords.length > 0) {
    sections.push(`→ Mots-clés: ${reading.tarot.keywords.join(", ")}`);
  }
  sections.push("");

  // Kabbalah
  sections.push(
    `Kabbale: ${reading.kabbalah.sefirahName} (${reading.kabbalah.sefirahHebrew})`,
    `→ ${reading.kabbalah.meaning.slice(0, meaningLen)}`,
  );
  if (reading.kabbalah.pathNumber) {
    sections.push(
      `→ Chemin ${reading.kabbalah.pathNumber}: ${reading.kabbalah.pathLetterName} — ${reading.kabbalah.pathMeaning?.slice(0, proverbLen)}`,
    );
  }
  sections.push("");

  // Hermeticism
  sections.push(
    `Hermétisme: ${reading.hermetic.principleName}`,
    `→ « ${reading.hermetic.axiom} »`,
  );
  if (isRich) {
    sections.push(`→ ${reading.hermetic.meaning.slice(0, meaningLen)}`);
  }
  sections.push("");

  // Alchemy
  sections.push(
    `Alchimie: ${reading.alchemy.stageName} (${reading.alchemy.stageLatin}) + ${reading.alchemy.operationName} (${reading.alchemy.operationLatin})`,
    `→ Planète: ${reading.alchemy.planet}`,
    "",
  );

  // -------------------------------------------------------------------------
  // 5. RESONANCES
  // -------------------------------------------------------------------------

  // Chakra + Solfege
  sections.push(
    `Chakra: ${reading.chakras.chakraNameSanskrit} (${reading.chakras.chakraNameFrench})`,
    `→ Mantra: ${reading.chakras.mantra}, Fréquence: ${reading.chakras.solfegeFrequencyHz} Hz`,
  );
  if (isRich) {
    sections.push(
      `→ Couleur: ${reading.chakras.color}, Élément: ${reading.chakras.element}`,
    );
  }
  sections.push("");

  // Gematria
  sections.push(
    `Gematria: ${reading.gematria.value} = ${reading.gematria.sacredWord} (${reading.gematria.letters.map((l) => `${l.name}=${l.numericalValue}`).join("+")})`,
    "",
  );

  // Elements
  sections.push(
    `Éléments: ${reading.elements.dominant.toUpperCase()} dominant (${ELEMENTS[reading.elements.dominant].qualities})`,
  );

  // Sacred Geometry
  sections.push(
    `Géométrie sacrée: ${reading.sacredGeometry.harmonicFrequency} (résonance Phi: ${(reading.sacredGeometry.phiResonance * 100).toFixed(1)}%)`,
  );

  return sections.join("\n");
}
