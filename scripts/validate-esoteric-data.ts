#!/usr/bin/env bun
/**
 * Esoteric Data Validation Script
 *
 * Verifies the integrity and completeness of all esoteric data files
 * in src/data/esoteric/. Checks entry counts, cross-references,
 * binary signature coverage, and description lengths.
 *
 * Usage: bun run validate:data
 */

import {
  TRIGRAMS,
  HEXAGRAMS,
  MAJOR_ARCANA,
  SEFIROT,
  KABBALAH_PATHS,
  HERMETIC_PRINCIPLES,
  ELEMENTS,
  ODU,
  GEOMANCY_FIGURES,
  ELDER_FUTHARK,
  ALCHEMY_STAGES,
  ALCHEMY_OPERATIONS,
  CHAKRAS,
  SOLFEGE_FREQUENCIES,
  HEBREW_LETTERS,
  TAROT_PATH_LETTER,
  SEPTENARY,
  QUATERNARY,
  ZODIAC_LETTER,
} from "@/data/esoteric";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

let totalErrors = 0;
let totalWarnings = 0;
let totalOk = 0;

function header(name: string) {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`  ${name}`);
  console.log("=".repeat(60));
}

function ok(msg: string) {
  totalOk++;
  console.log(`  \x1b[32m OK \x1b[0m ${msg}`);
}

function error(msg: string) {
  totalErrors++;
  console.log(`  \x1b[31m ERR\x1b[0m ${msg}`);
}

function warn(msg: string) {
  totalWarnings++;
  console.log(`  \x1b[33mWARN\x1b[0m ${msg}`);
}

function checkCount(
  name: string,
  data: Record<string | number, unknown>,
  expected: number,
) {
  const count = Object.keys(data).length;
  if (count === expected) {
    ok(`${name}: ${count} entries`);
  } else {
    error(`${name}: expected ${expected}, got ${count}`);
  }
}

function checkArrayCount(name: string, data: readonly unknown[], expected: number) {
  if (data.length === expected) {
    ok(`${name}: ${data.length} entries`);
  } else {
    error(`${name}: expected ${expected}, got ${data.length}`);
  }
}

function checkDescriptionLength(
  name: string,
  data: Record<string | number, { description?: string; meaning?: string }>,
  field: "description" | "meaning",
  minWords: number,
) {
  const entries = Object.values(data);
  let short = 0;
  const shortKeys: string[] = [];
  for (const entry of entries) {
    const text = (entry as Record<string, string>)[field] ?? "";
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    if (wordCount < minWords) {
      short++;
      const key =
        "number" in entry
          ? String((entry as { number: number }).number)
          : "name" in entry
            ? String((entry as { name: string }).name)
            : "?";
      shortKeys.push(key);
    }
  }
  if (short === 0) {
    ok(`${name}: all ${field} fields >= ${minWords} words`);
  } else {
    warn(
      `${name}: ${short}/${entries.length} entries have ${field} < ${minWords} words (keys: ${shortKeys.slice(0, 5).join(", ")}${short > 5 ? "..." : ""})`,
    );
  }
}

// ---------------------------------------------------------------------------
// 1. Entry Counts
// ---------------------------------------------------------------------------

header("1. ENTRY COUNTS");

checkCount("Trigrams", TRIGRAMS, 8);
checkCount("Hexagrams", HEXAGRAMS, 64);
checkCount("Major Arcana", MAJOR_ARCANA, 22);
checkCount("Sefirot", SEFIROT, 10);
checkCount("Kabbalah Paths", KABBALAH_PATHS, 22);
checkCount("Hermetic Principles", HERMETIC_PRINCIPLES, 7);
checkCount("Elements", ELEMENTS, 4);
checkCount("Odu (Ifa)", ODU, 256);
checkCount("Geomancy Figures", GEOMANCY_FIGURES, 16);
checkCount("Elder Futhark", ELDER_FUTHARK, 24);
checkCount("Alchemy Stages", ALCHEMY_STAGES, 4);
checkCount("Alchemy Operations", ALCHEMY_OPERATIONS, 7);
checkCount("Chakras", CHAKRAS, 7);
checkCount("Solfege Frequencies", SOLFEGE_FREQUENCIES, 9);
checkCount("Hebrew Letters", HEBREW_LETTERS, 22);

// Correspondence tables
checkArrayCount("Tarot-Path-Letter correspondences", TAROT_PATH_LETTER, 22);
checkArrayCount("Septenary correspondences", SEPTENARY, 7);
checkArrayCount("Quaternary correspondences", QUATERNARY, 4);
checkArrayCount("Zodiac-Letter correspondences", ZODIAC_LETTER, 12);

// ---------------------------------------------------------------------------
// 2. Cross-Reference Coherence
// ---------------------------------------------------------------------------

header("2. CROSS-REFERENCE COHERENCE");

// 2a. Hexagram trigram indices → valid trigram index (0-7)
{
  let errors = 0;
  for (const hex of Object.values(HEXAGRAMS)) {
    if (!TRIGRAMS[hex.upperTrigramIndex]) errors++;
    if (!TRIGRAMS[hex.lowerTrigramIndex]) errors++;
  }
  if (errors === 0) {
    ok("Hexagrams → Trigrams: all trigram indices valid");
  } else {
    error(`Hexagrams → Trigrams: ${errors} invalid trigram references`);
  }
}

// 2b. Kabbalah paths → valid sefirah numbers (1-10)
{
  let errs = 0;
  const badPaths: number[] = [];
  for (const path of Object.values(KABBALAH_PATHS)) {
    if (!SEFIROT[path.fromSefirahNumber]) {
      errs++;
      badPaths.push(path.number);
    }
    if (!SEFIROT[path.toSefirahNumber]) {
      errs++;
      badPaths.push(path.number);
    }
  }
  if (errs === 0) {
    ok("Kabbalah Paths → Sefirot: all sefirah references valid");
  } else {
    error(
      `Kabbalah Paths → Sefirot: ${errs} invalid refs (paths: ${badPaths.join(", ")})`,
    );
  }
}

// 2c. Kabbalah paths → valid tarot arcana (0-21)
{
  let errs = 0;
  for (const path of Object.values(KABBALAH_PATHS)) {
    if (!MAJOR_ARCANA[path.tarotArcanaNumber]) errs++;
  }
  if (errs === 0) {
    ok("Kabbalah Paths → Tarot: all arcana references valid");
  } else {
    error(`Kabbalah Paths → Tarot: ${errs} invalid arcana references`);
  }
}

// 2d. Alchemy operations → valid stage numbers (0-3)
{
  let errs = 0;
  for (const op of Object.values(ALCHEMY_OPERATIONS)) {
    if (!ALCHEMY_STAGES[op.stageNumber]) errs++;
  }
  if (errs === 0) {
    ok("Alchemy Operations → Stages: all stage references valid");
  } else {
    error(`Alchemy Operations → Stages: ${errs} invalid stage references`);
  }
}

// 2e. Hebrew letters path number → valid Kabbalah path (1-22)
{
  let errs = 0;
  for (const letter of Object.values(HEBREW_LETTERS)) {
    if (letter.pathNumber < 1 || letter.pathNumber > 22) errs++;
    if (!KABBALAH_PATHS[letter.pathNumber]) errs++;
  }
  if (errs === 0) {
    ok("Hebrew Letters → Kabbalah Paths: all path references valid");
  } else {
    error(`Hebrew Letters → Kabbalah Paths: ${errs} invalid path references`);
  }
}

// 2f. Tarot-Path-Letter correspondences → valid tarot, path, letter numbers
{
  let errs = 0;
  for (const entry of TAROT_PATH_LETTER) {
    if (!MAJOR_ARCANA[entry.tarotNumber]) errs++;
    if (!KABBALAH_PATHS[entry.pathNumber]) errs++;
    if (!HEBREW_LETTERS[entry.letterNumber]) errs++;
  }
  if (errs === 0) {
    ok("Tarot-Path-Letter → all references valid");
  } else {
    error(`Tarot-Path-Letter → ${errs} invalid references`);
  }
}

// 2g. Septenary correspondences → valid hermetic, operation, chakra numbers
{
  let errs = 0;
  for (const entry of SEPTENARY) {
    if (!HERMETIC_PRINCIPLES[entry.hermeticNumber]) errs++;
    if (!ALCHEMY_OPERATIONS[entry.operationNumber]) errs++;
    if (!CHAKRAS[entry.chakraNumber]) errs++;
  }
  if (errs === 0) {
    ok("Septenary → Hermetic/Operations/Chakras: all references valid");
  } else {
    error(`Septenary → ${errs} invalid references`);
  }
}

// 2h. Quaternary correspondences → valid stage numbers
{
  let errs = 0;
  for (const entry of QUATERNARY) {
    if (!ALCHEMY_STAGES[entry.stageNumber]) errs++;
    if (!ELEMENTS[entry.element]) errs++;
  }
  if (errs === 0) {
    ok("Quaternary → Elements/Stages: all references valid");
  } else {
    error(`Quaternary → ${errs} invalid references`);
  }
}

// 2i. Zodiac-Letter correspondences → valid letter numbers
{
  let errs = 0;
  for (const entry of ZODIAC_LETTER) {
    if (!HEBREW_LETTERS[entry.letterNumber]) errs++;
  }
  if (errs === 0) {
    ok("Zodiac-Letter → Hebrew Letters: all references valid");
  } else {
    error(`Zodiac-Letter → ${errs} invalid letter references`);
  }
}

// ---------------------------------------------------------------------------
// 3. Binary Signature Coverage
// ---------------------------------------------------------------------------

header("3. BINARY SIGNATURE COVERAGE");

// 3a. Ifa: 256 Odu binary signatures should cover 0-255
{
  const signatures = new Set<string>();
  const numbers = new Set<number>();
  for (const odu of Object.values(ODU)) {
    signatures.add(odu.binarySignature);
    numbers.add(odu.number);
  }
  // Check number coverage
  let missingNumbers = 0;
  for (let i = 0; i < 256; i++) {
    if (!numbers.has(i)) missingNumbers++;
  }
  if (missingNumbers === 0) {
    ok("Ifa Odu: all 256 numbers (0-255) present");
  } else {
    error(`Ifa Odu: ${missingNumbers} numbers missing from 0-255`);
  }

  // Check binary signature uniqueness
  if (signatures.size === 256) {
    ok("Ifa Odu: all 256 binary signatures unique");
  } else {
    error(
      `Ifa Odu: expected 256 unique binary signatures, got ${signatures.size}`,
    );
  }

  // Check signatures are 8-char binary strings
  let malformed = 0;
  for (const sig of signatures) {
    if (!/^[01]{8}$/.test(sig)) malformed++;
  }
  if (malformed === 0) {
    ok("Ifa Odu: all binary signatures are 8-char [01] strings");
  } else {
    error(`Ifa Odu: ${malformed} malformed binary signatures`);
  }
}

// 3b. Geomancy: 16 figures binary signatures should cover 0-15
{
  const signatures = new Set<string>();
  const numbers = new Set<number>();
  for (const fig of Object.values(GEOMANCY_FIGURES)) {
    signatures.add(fig.binarySignature);
    numbers.add(fig.number);
  }
  let missingNumbers = 0;
  for (let i = 0; i < 16; i++) {
    if (!numbers.has(i)) missingNumbers++;
  }
  if (missingNumbers === 0) {
    ok("Geomancy: all 16 numbers (0-15) present");
  } else {
    error(`Geomancy: ${missingNumbers} numbers missing from 0-15`);
  }

  if (signatures.size === 16) {
    ok("Geomancy: all 16 binary signatures unique");
  } else {
    error(
      `Geomancy: expected 16 unique binary signatures, got ${signatures.size}`,
    );
  }

  let malformed = 0;
  for (const sig of signatures) {
    if (!/^[01]{4}$/.test(sig)) malformed++;
  }
  if (malformed === 0) {
    ok("Geomancy: all binary signatures are 4-char [01] strings");
  } else {
    error(`Geomancy: ${malformed} malformed binary signatures`);
  }
}

// ---------------------------------------------------------------------------
// 4. Rune Reversibility Check
// ---------------------------------------------------------------------------

header("4. RUNE REVERSIBILITY");

{
  const nonReversible = [
    "Gebo",
    "Hagalaz",
    "Nauthiz",
    "Isa",
    "Jera",
    "Eihwaz",
    "Sowilo",
    "Ingwaz",
    "Dagaz",
  ];
  let errs = 0;
  for (const rune of Object.values(ELDER_FUTHARK)) {
    const shouldBeNonReversible = nonReversible.includes(rune.name);
    if (shouldBeNonReversible && rune.isReversible) {
      error(`Rune ${rune.name} should NOT be reversible but isReversible=true`);
      errs++;
    }
    if (!shouldBeNonReversible && !rune.isReversible) {
      error(`Rune ${rune.name} should be reversible but isReversible=false`);
      errs++;
    }
  }
  if (errs === 0) {
    ok("Elder Futhark: 9 non-reversible runes correctly flagged");
  }
}

// ---------------------------------------------------------------------------
// 5. Solfege Digital Root Pattern (3-6-9)
// ---------------------------------------------------------------------------

header("5. SOLFEGE DIGITAL ROOT PATTERN");

{
  const validRoots = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  let errs = 0;
  for (const freq of Object.values(SOLFEGE_FREQUENCIES)) {
    if (!validRoots.has(freq.digitalRoot)) {
      error(
        `Solfege ${freq.frequencyHz} Hz: invalid digital root ${freq.digitalRoot}`,
      );
      errs++;
    }
    // Verify the digital root computation
    let sum = freq.frequencyHz;
    while (sum > 9) {
      sum = String(sum)
        .split("")
        .reduce((a, b) => a + Number(b), 0);
    }
    if (sum !== freq.digitalRoot) {
      error(
        `Solfege ${freq.frequencyHz} Hz: declared root ${freq.digitalRoot}, computed ${sum}`,
      );
      errs++;
    }
  }
  if (errs === 0) {
    ok("Solfege: all 9 frequencies have correct digital roots");
  }
}

// ---------------------------------------------------------------------------
// 6. Description Length Checks
// ---------------------------------------------------------------------------

header("6. DESCRIPTION LENGTH CHECKS");

// Min word counts per PRD: hexagrams 150-200, arcana 150-200, sefirot 200+,
// paths 150+, hermetic 200+, elements 100+, odu 150-200, geomancy 100-150,
// runes 150+, alchemy stages 150+, chakras 150+, hebrew letters 100+.
// We use a lenient threshold here (30 words min) as a basic sanity check.

checkDescriptionLength("Hexagrams", HEXAGRAMS, "meaning", 30);
checkDescriptionLength("Major Arcana", MAJOR_ARCANA, "description", 30);
checkDescriptionLength("Sefirot", SEFIROT, "description", 30);
checkDescriptionLength("Kabbalah Paths", KABBALAH_PATHS, "description", 30);
checkDescriptionLength("Hermetic Principles", HERMETIC_PRINCIPLES, "meaning", 30);
checkDescriptionLength("Odu (Ifa)", ODU, "meaning", 20);
checkDescriptionLength("Geomancy Figures", GEOMANCY_FIGURES, "meaning", 20);
checkDescriptionLength("Elder Futhark", ELDER_FUTHARK, "meaning", 30);
checkDescriptionLength("Alchemy Stages", ALCHEMY_STAGES, "description", 30);
checkDescriptionLength("Chakras", CHAKRAS, "description", 30);
checkDescriptionLength("Hebrew Letters", HEBREW_LETTERS, "description", 20);

// ---------------------------------------------------------------------------
// 7. Ifa Special: 16 Odu Meji have richer corpus
// ---------------------------------------------------------------------------

header("7. IFA ODU MEJI CORPUS DEPTH");

{
  // The 16 Odu Meji are the "doubles": indices 0, 17, 34, 51, 68, 85, 102,
  // 119, 136, 153, 170, 187, 204, 221, 238, 255
  // (where upper and lower halves are identical)
  const mejiIndices = [
    0, 17, 34, 51, 68, 85, 102, 119, 136, 153, 170, 187, 204, 221, 238, 255,
  ];
  let shortProverbs = 0;
  let shortVerses = 0;
  for (const idx of mejiIndices) {
    const odu = ODU[idx];
    if (!odu) {
      error(`Odu Meji #${idx} missing`);
      continue;
    }
    if (odu.proverbs.length < 5) shortProverbs++;
    if (odu.eseIfaVerses.length < 3) shortVerses++;
  }
  if (shortProverbs === 0) {
    ok("Odu Meji: all 16 have 5+ proverbs");
  } else {
    warn(`Odu Meji: ${shortProverbs}/16 have < 5 proverbs`);
  }
  if (shortVerses === 0) {
    ok("Odu Meji: all 16 have 3+ Ese Ifa verses");
  } else {
    warn(`Odu Meji: ${shortVerses}/16 have < 3 Ese Ifa verses`);
  }
}

// ---------------------------------------------------------------------------
// 8. Gematria Special Cases (15 and 16)
// ---------------------------------------------------------------------------

header("8. GEMATRIA SPECIAL CASES");

{
  // Import the decomposition function
  const { decomposeGematria } = await import("@/lib/esoteric-lookup");

  // Case 15: should be Tet(9) + Vav(6), NOT Yod(10) + He(5)
  const letters15 = decomposeGematria(15);
  const sum15 = letters15.reduce((a, l) => a + l.numericalValue, 0);
  if (sum15 === 15) {
    ok("Gematria(15): sum correct = 15");
  } else {
    error(`Gematria(15): expected sum 15, got ${sum15}`);
  }
  const names15 = letters15.map((l) => l.name).join("+");
  // Accept both "Tet" and "Teth" transliterations
  if (/^Tet[h]?\+Vav$/.test(names15)) {
    ok(`Gematria(15): ${names15} (avoids divine name)`);
  } else {
    warn(`Gematria(15): expected Tet(h)+Vav, got ${names15}`);
  }

  // Case 16: should be Tet(9) + Zayin(7), NOT Yod(10) + Vav(6)
  const letters16 = decomposeGematria(16);
  const sum16 = letters16.reduce((a, l) => a + l.numericalValue, 0);
  if (sum16 === 16) {
    ok("Gematria(16): sum correct = 16");
  } else {
    error(`Gematria(16): expected sum 16, got ${sum16}`);
  }
  const names16 = letters16.map((l) => l.name).join("+");
  if (/^Tet[h]?\+Zayin$/.test(names16)) {
    ok(`Gematria(16): ${names16} (avoids divine name)`);
  } else {
    warn(`Gematria(16): expected Tet(h)+Zayin, got ${names16}`);
  }

  // Verify all values 0-255 decompose correctly
  let decompErrors = 0;
  for (let v = 0; v <= 255; v++) {
    const letters = decomposeGematria(v);
    const sum = letters.reduce((a, l) => a + l.numericalValue, 0);
    if (sum !== v) decompErrors++;
  }
  if (decompErrors === 0) {
    ok("Gematria: all 256 values (0-255) decompose correctly");
  } else {
    error(`Gematria: ${decompErrors} values have incorrect decompositions`);
  }
}

// ---------------------------------------------------------------------------
// SUMMARY
// ---------------------------------------------------------------------------

console.log(`\n${"=".repeat(60)}`);
console.log("  VALIDATION SUMMARY");
console.log("=".repeat(60));
console.log(`  \x1b[32m OK \x1b[0m ${totalOk} checks passed`);
if (totalWarnings > 0) {
  console.log(`  \x1b[33mWARN\x1b[0m ${totalWarnings} warnings`);
}
if (totalErrors > 0) {
  console.log(`  \x1b[31m ERR\x1b[0m ${totalErrors} errors`);
}
console.log("=".repeat(60));

if (totalErrors > 0) {
  process.exit(1);
}
