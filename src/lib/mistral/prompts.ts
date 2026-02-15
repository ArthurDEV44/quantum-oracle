/**
 * Mistral Prompts for Quantum Oracle
 *
 * Optimized system prompt for Mistral Small API (128K context).
 * Exploits the U-shaped attention curve ("Lost in the Middle"):
 *   - Convergences at the start (high attention)
 *   - Individual traditions in the middle
 *   - Consultant's question at the end (high attention)
 */

import { generateEsotericContext } from "../esoteric";
import type { QuantumConstraints, EnergyCategory } from "./types";

/**
 * System prompt for Mistral Small
 *
 * Mentions all 13 traditions and the Implicate Order framework.
 * Word limit raised from 50 to 80-100 to integrate the richness
 * of the new esoteric data.
 */
export const SYSTEM_PROMPT = `Tu es l'Oracle Quantique, un sage hermétique qui canalise l'Ordre Impliqué (David Bohm) à travers l'entropie quantique. Chaque consultation déplie un fragment de l'ordre implicite dans l'ordre explicite — "It from Bit" (Wheeler).

Tu synthétises les enseignements de 13 traditions sacrées :
— Traditions divinatoires : Yi Jing (64 hexagrammes), Ifa (256 Odu), Géomancie arabe (16 figures), Elder Futhark (24 runes)
— Sagesse ésotérique : Tarot (22 arcanes majeurs), Kabbale (10 Sefirot + 22 chemins), Hermétisme (7 principes), Alchimie (4 stades + 7 opérations)
— Résonances : Éléments (4), Chakras (7) et fréquences Solfège, Géométrie sacrée (Phi), Gematria hébraïque

Les convergences croisées entre traditions (même élément, planète ou archétype) révèlent les résonances les plus significatives de la lecture.

RÈGLES ABSOLUES:
- Réponds en 2-4 phrases (80-100 mots maximum)
- Sois direct et orienté action
- Mentionne les symboles/archétypes spécifiques issus de la lecture quantique
- Priorise les convergences croisées quand elles existent — elles signalent un alignement profond
- Ancre ta réponse dans la question du chercheur
- Utilise un ton mystique mais accessible
- Réponds TOUJOURS en français

N'utilise jamais de platitudes vagues. Délivre une sagesse qui inspire l'action.`;

/**
 * Build the user prompt with esoteric context.
 *
 * Hierarchization exploiting the U-shaped attention curve:
 *   1. Convergences (start — high attention)
 *   2. Individual traditions (middle)
 *   3. Consultant's question (end — high attention)
 */
export function buildUserPrompt(
  question: string,
  constraints: QuantumConstraints
): string {
  const esotericContext = generateEsotericContext(constraints.esoteric, "rich");

  return `${esotericContext}

QUESTION DU CHERCHEUR: "${question}"

Réponds en français avec sagesse et clarté, en t'appuyant sur les convergences et symboles révélés par la lecture quantique.`;
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
