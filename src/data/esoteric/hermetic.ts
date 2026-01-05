/**
 * Hermetic Principles - 7 Universal Laws (The Kybalion)
 * Compact format: [name, axiom, meaning]
 */

export interface HermeticPrinciple {
  name: string;
  axiom: string;
  meaning: string;
}

// [name, axiom, meaning]
const P: [string, string, string][] = [
  ["Mentalism", "The All is Mind; the Universe is Mental", "Reality is a mental construct; consciousness shapes existence"],
  ["Correspondence", "As above, so below; as below, so above", "Patterns repeat across all planes of existence"],
  ["Vibration", "Nothing rests; everything moves; everything vibrates", "All matter and energy exist in constant motion"],
  ["Polarity", "Everything is dual; opposites are identical in nature", "Opposites are extremes of the same thing"],
  ["Rhythm", "Everything flows, out and in; all things rise and fall", "Cycles govern all phenomena"],
  ["Cause and Effect", "Every cause has its effect; every effect has its cause", "Nothing happens by chance; there is no randomness"],
  ["Gender", "Gender is in everything; everything has masculine and feminine", "Creative duality exists in all things"],
];

export const HERMETIC_PRINCIPLES: Record<number, HermeticPrinciple> = Object.fromEntries(
  P.map(([name, axiom, meaning], i) => [i + 1, { name, axiom, meaning }])
);
