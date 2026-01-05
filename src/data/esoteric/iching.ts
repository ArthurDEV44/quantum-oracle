/**
 * I Ching - 8 Trigrams & 64 Hexagrams
 * Compact format: [name, symbol, element/meaning, attribute/keywords]
 */

export interface Trigram {
  name: string;
  symbol: string;
  element: string;
  attribute: string;
  binary: string;
}

export interface Hexagram {
  name: string;
  symbol: string;
  meaning: string;
}

// Trigrams: [name, symbol, element, attribute, binary]
const T: [string, string, string, string, string][] = [
  ["Kun", "☷", "Earth", "Receptive", "000"],
  ["Gen", "☶", "Mountain", "Stillness", "001"],
  ["Kan", "☵", "Water", "Danger", "010"],
  ["Xun", "☴", "Wind", "Gentle", "011"],
  ["Zhen", "☳", "Thunder", "Arousing", "100"],
  ["Li", "☲", "Fire", "Clinging", "101"],
  ["Dui", "☱", "Lake", "Joyous", "110"],
  ["Qian", "☰", "Heaven", "Creative", "111"],
];

export const TRIGRAMS: Record<number, Trigram> = Object.fromEntries(
  T.map(([name, symbol, element, attribute, binary], i) => [
    i,
    { name, symbol, element, attribute, binary },
  ])
);

// Hexagrams: [name, symbol, meaning] - compact single-line format
const H: [string, string, string][] = [
  ["The Creative", "䷀", "Pure yang energy, creative power, initiative and perseverance lead to success"],
  ["The Receptive", "䷁", "Pure yin energy, receptivity and devotion, success through following"],
  ["Difficulty at the Beginning", "䷂", "Initial obstacles, perseverance needed, gather helpers"],
  ["Youthful Folly", "䷃", "Inexperience, seek guidance, learning through mistakes"],
  ["Waiting", "䷄", "Patient waiting, nourishment, trust in timing"],
  ["Conflict", "䷅", "Opposition, seek mediation, avoid prolonged disputes"],
  ["The Army", "䷆", "Organized discipline, leadership, collective action"],
  ["Holding Together", "䷇", "Unity, alliance, seek the source of connection"],
  ["Small Taming", "䷈", "Gentle restraint, small accumulations, patience"],
  ["Treading", "䷉", "Careful conduct, proceeding with awareness"],
  ["Peace", "䷊", "Harmony of heaven and earth, prosperity, balance"],
  ["Standstill", "䷋", "Stagnation, withdrawal, time for inner work"],
  ["Fellowship", "䷌", "Community, shared purpose, openness"],
  ["Great Possession", "䷍", "Abundance, supreme success, great responsibility"],
  ["Modesty", "䷎", "Humility brings success, balance of high and low"],
  ["Enthusiasm", "䷏", "Joyful movement, inspiration, setting things in motion"],
  ["Following", "䷐", "Adaptability, knowing when to lead and follow"],
  ["Work on the Decayed", "䷑", "Repair and renovation, correcting past mistakes"],
  ["Approach", "䷒", "Advance, growing influence, opportunity approaches"],
  ["Contemplation", "䷓", "Observation, meditation, seeing the big picture"],
  ["Biting Through", "䷔", "Decisive action, justice, removing obstacles"],
  ["Grace", "䷕", "Beauty, form, attention to aesthetics"],
  ["Splitting Apart", "䷖", "Decline, letting go, accepting loss"],
  ["Return", "䷗", "Turning point, renewal, the light returns"],
  ["Innocence", "䷘", "Unexpected, natural action, freedom from ulterior motives"],
  ["Great Taming", "䷙", "Restraining great power, accumulating wisdom"],
  ["Nourishment", "䷚", "Sustenance, care for body and mind"],
  ["Great Exceeding", "䷛", "Critical mass, extraordinary times require extraordinary measures"],
  ["The Abysmal", "䷜", "Danger repeated, maintaining integrity through difficulty"],
  ["The Clinging", "䷝", "Clarity, illumination, awareness of interdependence"],
  ["Influence", "䷞", "Mutual attraction, courtship, emotional sensitivity"],
  ["Duration", "䷟", "Perseverance, consistency, enduring patterns"],
  ["Retreat", "䷠", "Strategic withdrawal, knowing when to step back"],
  ["Great Power", "䷡", "Strength, using power wisely and ethically"],
  ["Progress", "䷢", "Advancement, recognition, the sun rising"],
  ["Darkening of the Light", "䷣", "Adversity, protecting inner light, perseverance in darkness"],
  ["The Family", "䷤", "Domestic harmony, proper relationships, inner circle"],
  ["Opposition", "䷥", "Contradiction, finding unity in diversity"],
  ["Obstruction", "䷦", "Obstacles, turning inward, seeking help"],
  ["Deliverance", "䷧", "Liberation, release from tension, forgiveness"],
  ["Decrease", "䷨", "Simplification, sincerity compensates for lack"],
  ["Increase", "䷩", "Growth, benefiting others, favorable time for action"],
  ["Breakthrough", "䷪", "Resolution, determination, speaking truth"],
  ["Coming to Meet", "䷫", "Temptation, unexpected encounter, vigilance"],
  ["Gathering Together", "䷬", "Assembly, collecting resources, community"],
  ["Pushing Upward", "䷭", "Gradual ascent, effort brings success"],
  ["Oppression", "䷮", "Exhaustion, maintaining inner truth despite adversity"],
  ["The Well", "䷯", "Source of nourishment, fundamental needs, depth"],
  ["Revolution", "䷰", "Transformation, radical change, timing is crucial"],
  ["The Cauldron", "䷱", "Nourishment of the worthy, cultural refinement"],
  ["The Arousing", "䷲", "Shock, awakening, fear leading to caution"],
  ["Keeping Still", "䷳", "Meditation, stopping, finding peace in stillness"],
  ["Development", "䷴", "Gradual progress, natural unfolding, patience"],
  ["The Marrying Maiden", "䷵", "Subordinate position, making the best of circumstances"],
  ["Abundance", "䷶", "Peak experience, enjoy fullness without clinging"],
  ["The Wanderer", "䷷", "Travel, impermanence, maintaining dignity as stranger"],
  ["The Gentle", "䷸", "Penetrating influence, persistence, subtle power"],
  ["The Joyous", "䷹", "Joy, encouragement, shared happiness"],
  ["Dispersion", "䷺", "Dissolving barriers, overcoming egotism"],
  ["Limitation", "䷻", "Boundaries, moderation, knowing limits"],
  ["Inner Truth", "䷼", "Sincerity, understanding, empathic connection"],
  ["Small Exceeding", "䷽", "Attention to small matters, flying low"],
  ["After Completion", "䷾", "Transition, maintaining order after success"],
  ["Before Completion", "䷿", "Almost there, careful attention needed, potential"],
];

export const HEXAGRAMS: Record<number, Hexagram> = Object.fromEntries(
  H.map(([name, symbol, meaning], i) => [i + 1, { name, symbol, meaning }])
);

/**
 * Calculate hexagram from quantum bytes
 */
export function calculateHexagram(bytes: number[]): {
  number: number;
  upper: number;
  lower: number;
} {
  const lines = bytes.slice(0, 6).map((b) => b & 1);
  const lowerTrigram = (lines[0] << 2) | (lines[1] << 1) | lines[2];
  const upperTrigram = (lines[3] << 2) | (lines[4] << 1) | lines[5];
  const hexagramNumber = ((upperTrigram * 8 + lowerTrigram) % 64) + 1;
  return { number: hexagramNumber, upper: upperTrigram, lower: lowerTrigram };
}
