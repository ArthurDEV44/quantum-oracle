/**
 * Kabbalah - 10 Sefirot (Tree of Life)
 * Compact format: [name, hebrew, meaning, attribute]
 */

export interface Sefirah {
  name: string;
  hebrew: string;
  meaning: string;
  attribute: string;
}

// [name, hebrew, meaning, attribute]
const S: [string, string, string, string][] = [
  ["Keter", "כתר", "Crown - Divine will, the source of all", "Supreme consciousness"],
  ["Chokmah", "חכמה", "Wisdom - Divine wisdom, first flash of insight", "Inspiration"],
  ["Binah", "בינה", "Understanding - Divine understanding, analytical thought", "Comprehension"],
  ["Chesed", "חסד", "Mercy - Loving kindness, benevolence", "Love and grace"],
  ["Gevurah", "גבורה", "Strength - Divine judgment, discipline", "Power and restraint"],
  ["Tiferet", "תפארת", "Beauty - Harmony, compassion, balance", "Harmony"],
  ["Netzach", "נצח", "Victory - Endurance, ambition", "Eternity"],
  ["Hod", "הוד", "Splendor - Glory, humility, sincerity", "Majesty"],
  ["Yesod", "יסוד", "Foundation - Connection, bonding", "Foundation"],
  ["Malkuth", "מלכות", "Kingdom - Physical reality, manifestation", "Sovereignty"],
];

export const SEFIROT: Record<number, Sefirah> = Object.fromEntries(
  S.map(([name, hebrew, meaning, attribute], i) => [
    i + 1,
    { name, hebrew, meaning, attribute },
  ])
);
