export const ELEMENT_SYMBOLS: Record<string, { symbol: string; color: string }> = {
  earth: { symbol: "\u{1F703}", color: "text-amber-400" },
  water: { symbol: "\u{1F704}", color: "text-blue-400" },
  fire: { symbol: "\u{1F702}", color: "text-red-400" },
  air: { symbol: "\u{1F701}", color: "text-cyan-400" },
};

export const DERIVATION_EXPLANATIONS = {
  iChing: "Les 6 premiers bytes quantiques génèrent les lignes yin/yang. Les bits de poids faible (pair=yin, impair=yang) forment deux trigrammes qui déterminent l'hexagramme.",
  tarot: "La somme de tous les bytes quantiques, modulo 22, détermine l'arcane majeur. Chaque carte représente un archétype universel.",
  kabbalah: "La somme des bytes, modulo 10, pointe vers une des 10 Sefirot de l'Arbre de Vie, représentant différentes émanations divines.",
  hermetic: "La somme des bytes, modulo 7, révèle un des 7 principes hermétiques du Kybalion, lois universelles de la réalité.",
  elements: "Chaque byte quantique (0-3) correspond à un élément. Leur proportion relative détermine l'équilibre élémentaire.",
  sacredGeometry: "Le ratio entre bytes consécutifs est comparé au nombre d'or (φ ≈ 1.618). Plus le ratio est proche, plus la résonance est élevée.",
  energy: "La moyenne des bytes, normalisée entre 0 et 1, représente le niveau d'énergie cosmique de la lecture.",
  polarity: "Le ratio de bytes pairs (yin) vs impairs (yang) détermine la polarité énergétique dominante.",
} as const;
