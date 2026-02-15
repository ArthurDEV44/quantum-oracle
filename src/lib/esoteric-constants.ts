export const ELEMENT_SYMBOLS: Record<string, { symbol: string; color: string }> = {
  earth: { symbol: "\u{1F703}", color: "text-amber-400" },
  water: { symbol: "\u{1F704}", color: "text-blue-400" },
  fire: { symbol: "\u{1F702}", color: "text-red-400" },
  air: { symbol: "\u{1F701}", color: "text-cyan-400" },
};

export const DERIVATION_EXPLANATIONS = {
  iChing: "L'octet 1 (bits 8-13) est lu comme 2 trigrammes de 3 bits formant l'hexagramme. Les bits 14-19 déterminent les lignes mutantes.",
  tarot: "Les bits 28-32 (5 bits) de l'octet 3-4 sont scalés de 32 vers 22 pour adresser un arcane majeur sans biais de modulo.",
  kabbalah: "Les bits 33-37 (5 bits) adressent les 10 Sefirot (0-9) ou les 22 chemins (10-31) de l'Arbre de Vie.",
  hermetic: "Les bits 38-40 (3 bits) sont scalés de 8 vers 7 pour adresser un des 7 principes hermétiques du Kybalion.",
  elements: "Les octets 8-11 (1 par élément) déterminent la distribution proportionnelle des 4 éléments.",
  sacredGeometry: "Le ratio entre les octets 12-13 est comparé au nombre d'or (φ ≈ 1.618). Plus le ratio est proche, plus la résonance est élevée.",
  energy: "Les octets 14-15 sont combinés pour calculer l'énergie cosmique, la polarité et la phase de la lecture.",
  polarity: "La différence entre les octets 14 et 15 détermine la polarité : yang (>32), yin (<-32), ou équilibrée.",
} as const;
