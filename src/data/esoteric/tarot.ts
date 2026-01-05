/**
 * Tarot Major Arcana - 22 Cards
 * Compact format: [name, symbol, meaning, keywords[]]
 */

export interface MajorArcana {
  name: string;
  symbol: string;
  meaning: string;
  keywords: string[];
}

// [name, symbol, meaning, keywords]
const A: [string, string, string, string[]][] = [
  ["The Fool", "🃏", "New beginnings, innocence, spontaneity, free spirit", ["beginnings", "innocence", "leap of faith"]],
  ["The Magician", "🎭", "Manifestation, resourcefulness, power, inspired action", ["willpower", "creation", "manifestation"]],
  ["The High Priestess", "🌙", "Intuition, sacred knowledge, divine feminine, the subconscious", ["intuition", "mystery", "inner voice"]],
  ["The Empress", "👑", "Femininity, beauty, nature, nurturing, abundance", ["fertility", "nurturing", "abundance"]],
  ["The Emperor", "🏛️", "Authority, structure, control, fatherhood", ["authority", "structure", "stability"]],
  ["The Hierophant", "⛪", "Spiritual wisdom, religious beliefs, tradition, conformity", ["tradition", "guidance", "knowledge"]],
  ["The Lovers", "💕", "Love, harmony, relationships, values alignment, choices", ["love", "union", "choices"]],
  ["The Chariot", "🏆", "Control, willpower, success, determination", ["victory", "determination", "control"]],
  ["Strength", "🦁", "Courage, patience, control, compassion", ["courage", "patience", "inner strength"]],
  ["The Hermit", "🏔️", "Soul searching, introspection, being alone, inner guidance", ["solitude", "wisdom", "guidance"]],
  ["Wheel of Fortune", "☸️", "Good luck, karma, life cycles, destiny, turning point", ["destiny", "cycles", "change"]],
  ["Justice", "⚖️", "Justice, fairness, truth, cause and effect, law", ["truth", "fairness", "karma"]],
  ["The Hanged Man", "🙃", "Pause, surrender, letting go, new perspectives", ["sacrifice", "release", "new perspective"]],
  ["Death", "🦋", "Endings, change, transformation, transition", ["transformation", "endings", "transition"]],
  ["Temperance", "⚗️", "Balance, moderation, patience, purpose", ["balance", "patience", "harmony"]],
  ["The Devil", "⛓️", "Shadow self, attachment, addiction, restriction", ["bondage", "materialism", "shadow"]],
  ["The Tower", "⚡", "Sudden change, upheaval, chaos, revelation, awakening", ["upheaval", "revelation", "awakening"]],
  ["The Star", "⭐", "Hope, faith, purpose, renewal, spirituality", ["hope", "inspiration", "serenity"]],
  ["The Moon", "🌕", "Illusion, fear, anxiety, subconscious, intuition", ["illusion", "intuition", "dreams"]],
  ["The Sun", "☀️", "Positivity, fun, warmth, success, vitality", ["joy", "success", "vitality"]],
  ["Judgement", "📯", "Judgement, rebirth, inner calling, absolution", ["rebirth", "calling", "reflection"]],
  ["The World", "🌍", "Completion, integration, accomplishment, travel", ["completion", "wholeness", "achievement"]],
];

export const MAJOR_ARCANA: Record<number, MajorArcana> = Object.fromEntries(
  A.map(([name, symbol, meaning, keywords], i) => [
    i,
    { name, symbol, meaning, keywords },
  ])
);
