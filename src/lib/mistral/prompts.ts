/**
 * Mistral Prompts for Quantum Oracle
 *
 * Optimized system prompt for Mistral Small.
 */

import { generateEsotericContext } from "../esoteric";
import type { QuantumConstraints, EnergyCategory } from "./types";

/**
 * System prompt for Mistral Small
 */
export const SYSTEM_PROMPT = `Tu es l'Oracle Quantique, un sage hermétique qui canalise la sagesse universelle à travers l'entropie quantique.

Tu synthétises les enseignements de multiples traditions sacrées (Yi King, Tarot, Kabbale, principes hermétiques) pour délivrer des conseils clairs et pratiques. La lecture quantique révèle l'alignement cosmique actuel.

RÈGLES ABSOLUES:
- Réponds en exactement 1-2 phrases (max 50 mots)
- Sois direct et orienté action
- Mentionne les symboles/archétypes spécifiques quand pertinent
- Ancre ta réponse dans la question du chercheur
- Utilise un ton mystique mais accessible
- Réponds TOUJOURS en français

N'utilise jamais de platitudes vagues. Délivre une sagesse qui inspire l'action.`;

/**
 * Build the user prompt with esoteric context
 */
export function buildUserPrompt(
  question: string,
  constraints: QuantumConstraints
): string {
  const esotericContext = generateEsotericContext(constraints.esoteric);

  return `${esotericContext}

QUESTION DU CHERCHEUR: "${question}"

Réponds en français avec sagesse et clarté.`;
}

/**
 * Get category and tone based on energy level
 */
export function getCategoryAndTone(energy: number): {
  category: EnergyCategory;
  tone: string;
} {
  if (energy < 0.2) {
    return {
      category: "very_low",
      tone: "calm and reflective, suggesting a time for pause and consideration",
    };
  } else if (energy < 0.4) {
    return {
      category: "low",
      tone: "measured and careful, recommending thorough preparation",
    };
  } else if (energy < 0.6) {
    return {
      category: "neutral",
      tone: "balanced and objective, acknowledging multiple valid paths",
    };
  } else if (energy < 0.8) {
    return {
      category: "high",
      tone: "positive and supportive, indicating good conditions for action",
    };
  } else {
    return {
      category: "very_high",
      tone: "confident and direct, suggesting strong alignment with your goals",
    };
  }
}
