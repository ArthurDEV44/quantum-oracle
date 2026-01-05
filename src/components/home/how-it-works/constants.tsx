/**
 * How It Works Section - Constants and Data
 */

import type { ReactNode } from "react";

export type ViewMode = "simple" | "technical";

export interface Step {
  emoji: string;
  title: string;
  description: string;
  colorClass: string;
}

export interface KeyPoint {
  title: string;
  desc: string;
  icon: ReactNode;
  color: "violet" | "blue" | "amber" | "emerald";
}

export const STEPS: Step[] = [
  {
    emoji: "🔮",
    title: "Votre Intention",
    description: "Posez votre question à l'infini",
    colorClass: "bg-violet-950/30 border-violet-500/30",
  },
  {
    emoji: "⚛️",
    title: "Écho Quantique",
    description: "Extraction du hasard pur",
    colorClass: "bg-indigo-950/30 border-indigo-500/30",
  },
  {
    emoji: "✨",
    title: "Transmutation",
    description: "L'IA façonne la réponse",
    colorClass: "bg-emerald-950/30 border-emerald-500/30",
  },
  {
    emoji: "🕯️",
    title: "Révélation",
    description: "Un conseil unique au monde",
    colorClass: "bg-amber-950/30 border-amber-500/30",
  },
];

export const KEY_POINTS: KeyPoint[] = [
  {
    title: "Vrai Hasard vs Faux Hasard",
    desc: "Contrairement aux ordinateurs classiques qui calculent le hasard, nous mesurons l'imprévisibilité réelle des particules subatomiques.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "violet",
  },
  {
    title: "Une IA Guidée, pas Automatisée",
    desc: "L'intelligence artificielle n'est qu'un scribe. Ses paramètres (ton, créativité) sont dictés par les fluctuations quantiques du moment.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "blue",
  },
  {
    title: "Sources Certifiées",
    desc: "Nous nous connectons aux laboratoires de l'Université de Hanovre et du NIST pour garantir l'origine physique de nos données.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "amber",
  },
  {
    title: "Niveau d'Énergie",
    desc: "Chaque tirage définit une vibration : une énergie basse invite au calme, une énergie haute pousse à l'audace.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "emerald",
  },
];

export const COLOR_CLASSES: Record<KeyPoint["color"], string> = {
  violet: "bg-violet-500/10 text-violet-400",
  blue: "bg-blue-500/10 text-blue-400",
  amber: "bg-amber-500/10 text-amber-400",
  emerald: "bg-emerald-500/10 text-emerald-400",
};
