/**
 * How It Works Section - Constants and Data
 */

export interface Step {
  title: string;
  description: string;
}

export interface KeyPoint {
  title: string;
  desc: string;
}

export const STEPS: Step[] = [
  { title: "Votre Intention", description: "Posez votre question à l'infini" },
  { title: "Écho Quantique", description: "Extraction du hasard pur" },
  { title: "Transmutation", description: "L'IA façonne la réponse" },
  { title: "Révélation", description: "Un conseil unique au monde" },
];

export const KEY_POINTS: KeyPoint[] = [
  {
    title: "Vrai Hasard vs Faux Hasard",
    desc: "Contrairement aux ordinateurs classiques qui calculent le hasard, nous mesurons l'imprévisibilité réelle des particules subatomiques.",
  },
  {
    title: "Une IA Guidée, pas Automatisée",
    desc: "L'intelligence artificielle n'est qu'un scribe. Ses paramètres sont dictés par les fluctuations quantiques du moment.",
  },
  {
    title: "Sources Certifiées",
    desc: "Nous nous connectons aux laboratoires de l'Université de Hanovre et du NIST pour garantir l'origine physique de nos données.",
  },
  {
    title: "Niveau d'Énergie",
    desc: "Chaque tirage définit une vibration : une énergie basse invite au calme, une énergie haute pousse à l'audace.",
  },
];
