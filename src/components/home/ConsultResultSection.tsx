"use client";

import { useState } from "react";

interface QuantumData {
  numbers: number[];
  timestamp: string;
  source: string;
  energy?: number;
  category?: string;
}

interface EsotericReading {
  iChing: {
    hexagram: number;
    name: string;
    symbol: string;
    meaning: string;
  };
  tarot: {
    arcana: number;
    name: string;
    symbol: string;
    keywords: string[];
  };
  kabbalah: {
    sefirah: number;
    name: string;
    hebrew: string;
    attribute: string;
  };
  hermetic: {
    principle: number;
    name: string;
    axiom: string;
  };
  elements: {
    dominant: string;
    balance: {
      physical: number;
      spiritual: number;
      passive: number;
      active: number;
    };
  };
  sacredGeometry: {
    phiResonance: number;
    harmonicFrequency: string;
  };
  synthesis: {
    energy: number;
    polarity: string;
    phase: string;
    cosmicTone: string;
  };
}

interface ConsultResultSectionProps {
  response: string;
  quantumData: QuantumData;
  esotericReading?: EsotericReading;
}

const ELEMENT_SYMBOLS: Record<string, { symbol: string; color: string }> = {
  earth: { symbol: "🜃", color: "text-amber-400" },
  water: { symbol: "🜄", color: "text-blue-400" },
  fire: { symbol: "🜂", color: "text-red-400" },
  air: { symbol: "🜁", color: "text-cyan-400" },
};

// Tooltip component for explanations
const Tooltip = ({ children, content }: { children: React.ReactNode; content: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <span className="relative inline-flex items-center">
      <span
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
        className="cursor-help"
      >
        {children}
      </span>
      {isVisible && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-xs text-white bg-neutral-800 border border-neutral-700 rounded-lg shadow-xl z-50 w-64 text-center whitespace-normal">
          {content}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-800" />
        </span>
      )}
    </span>
  );
};

// Help icon for tooltips
const HelpIcon = () => (
  <svg className="w-3.5 h-3.5 ml-1 text-neutral-500 hover:text-neutral-300 transition-colors inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Derivation formulas explanations
const DERIVATION_EXPLANATIONS = {
  iChing: "Les 6 premiers bytes quantiques génèrent les lignes yin/yang. Les bits de poids faible (pair=yin, impair=yang) forment deux trigrammes qui déterminent l'hexagramme.",
  tarot: "La somme de tous les bytes quantiques, modulo 22, détermine l'arcane majeur. Chaque carte représente un archétype universel.",
  kabbalah: "La somme des bytes, modulo 10, pointe vers une des 10 Sefirot de l'Arbre de Vie, représentant différentes émanations divines.",
  hermetic: "La somme des bytes, modulo 7, révèle un des 7 principes hermétiques du Kybalion, lois universelles de la réalité.",
  elements: "Chaque byte quantique (0-3) correspond à un élément. Leur proportion relative détermine l'équilibre élémentaire.",
  sacredGeometry: "Le ratio entre bytes consécutifs est comparé au nombre d'or (φ ≈ 1.618). Plus le ratio est proche, plus la résonance est élevée.",
  energy: "La moyenne des bytes, normalisée entre 0 et 1, représente le niveau d'énergie cosmique de la lecture.",
  polarity: "Le ratio de bytes pairs (yin) vs impairs (yang) détermine la polarité énergétique dominante.",
};

export const ConsultResultSection = ({
  response,
  quantumData,
  esotericReading,
}: ConsultResultSectionProps) => {
  const [activeTab, setActiveTab] = useState<"synthesis" | "traditions" | "technical">("synthesis");

  // Calculate derivation values for display
  const sum = quantumData.numbers.reduce((a, b) => a + b, 0);
  const average = sum / quantumData.numbers.length;

  return (
    <section className="max-w-3xl mx-auto px-4 py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      {/* Oracle Response */}
      <div className="relative p-8 md:p-12 bg-neutral-900/40 border border-violet-500/20 rounded-3xl backdrop-blur-xl">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-violet-600/10 blur-2xl rounded-full" />
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-600/10 blur-2xl rounded-full" />

        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-3 text-violet-400 mb-2">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-violet-500/30" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">La Réponse de l&apos;Oracle</span>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-violet-500/30" />
          </div>

          <p className="text-xl md:text-2xl text-white leading-relaxed text-center font-medium italic">
            &ldquo;{response}&rdquo;
          </p>
        </div>
      </div>

      {/* Quantum Fingerprints - Redesigned */}
      <div className="max-w-2xl mx-auto">
        <details className="group" open>
          <summary className="flex items-center justify-center gap-2 text-sm text-neutral-500 cursor-pointer hover:text-neutral-300 transition-colors list-none">
            <span className="group-open:rotate-180 transition-transform duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            Comprendre les empreintes quantiques
          </summary>

          <div className="mt-6 space-y-6">
            {/* LEVEL 1: Quantum Flow Visualization */}
            <div className="p-5 bg-black/50 border border-violet-500/20 rounded-2xl">
              <h3 className="text-xs text-violet-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Comment ça fonctionne
              </h3>

              {/* Flow Diagram */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                {/* Step 1: Quantum Source */}
                <div className="flex-1 p-3 bg-neutral-900/60 rounded-xl border border-neutral-800">
                  <div className="text-2xl mb-2">🎲</div>
                  <div className="text-xs text-neutral-400 font-medium">Source Quantique</div>
                  <div className="text-[10px] text-neutral-600 mt-1">{quantumData.source}</div>
                </div>

                {/* Arrow */}
                <div className="text-neutral-600 rotate-90 md:rotate-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                {/* Step 2: Raw Bytes */}
                <div className="flex-1 p-3 bg-neutral-900/60 rounded-xl border border-neutral-800">
                  <div className="flex justify-center gap-1 mb-2">
                    {quantumData.numbers.slice(0, 4).map((n, i) => (
                      <span key={i} className="text-xs font-mono text-violet-300 bg-violet-900/30 px-1.5 py-0.5 rounded">
                        {n.toString(16).toUpperCase().padStart(2, "0")}
                      </span>
                    ))}
                    <span className="text-xs text-neutral-600">...</span>
                  </div>
                  <div className="text-xs text-neutral-400 font-medium">8 Bytes Aléatoires</div>
                  <div className="text-[10px] text-neutral-600 mt-1">Somme: {sum}</div>
                </div>

                {/* Arrow */}
                <div className="text-neutral-600 rotate-90 md:rotate-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                {/* Step 3: Interpretation */}
                <div className="flex-1 p-3 bg-neutral-900/60 rounded-xl border border-emerald-900/30">
                  <div className="text-2xl mb-2">✨</div>
                  <div className="text-xs text-neutral-400 font-medium">Interprétations</div>
                  <div className="text-[10px] text-neutral-600 mt-1">6 traditions</div>
                </div>
              </div>

              <p className="text-[10px] text-neutral-500 text-center mt-4 leading-relaxed">
                Les fluctuations quantiques du vide sont mesurées, converties en nombres,
                puis transformées en symboles via des formules mathématiques déterministes.
              </p>
            </div>

            {/* LEVEL 2: Tab Navigation */}
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setActiveTab("synthesis")}
                className={`px-4 py-2 text-xs rounded-full transition-all ${
                  activeTab === "synthesis"
                    ? "bg-violet-600 text-white"
                    : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                }`}
              >
                Synthèse
              </button>
              <button
                onClick={() => setActiveTab("traditions")}
                className={`px-4 py-2 text-xs rounded-full transition-all ${
                  activeTab === "traditions"
                    ? "bg-violet-600 text-white"
                    : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                }`}
              >
                Traditions
              </button>
              <button
                onClick={() => setActiveTab("technical")}
                className={`px-4 py-2 text-xs rounded-full transition-all ${
                  activeTab === "technical"
                    ? "bg-violet-600 text-white"
                    : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
                }`}
              >
                Données Brutes
              </button>
            </div>

            {/* TAB: Synthesis (Simple Overview) */}
            {activeTab === "synthesis" && esotericReading && (
              <div className="space-y-4 animate-in fade-in duration-300">
                {/* Energy with explanation */}
                <div className="p-5 bg-black/40 border border-neutral-800 rounded-2xl">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-sm text-white font-medium">Énergie Cosmique</span>
                      <Tooltip content={DERIVATION_EXPLANATIONS.energy}>
                        <HelpIcon />
                      </Tooltip>
                    </div>
                    <span className="text-xl font-mono text-violet-400">
                      {Math.round(esotericReading.synthesis.energy * 100)}%
                    </span>
                  </div>
                  <div className="h-3 bg-neutral-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-violet-600 to-emerald-500 rounded-full transition-all duration-1000"
                      style={{ width: `${esotericReading.synthesis.energy * 100}%` }}
                    />
                  </div>
                  <div className="mt-3 p-3 bg-neutral-900/50 rounded-lg">
                    <div className="text-[11px] text-neutral-500 mb-1">Calcul</div>
                    <div className="text-xs font-mono text-neutral-300">
                      moyenne({quantumData.numbers.slice(0, 4).join(", ")}...) / 255 = {(average / 255).toFixed(3)}
                    </div>
                  </div>
                </div>

                {/* Polarity & Phase */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-black/40 border border-neutral-800 rounded-xl">
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-xs text-neutral-500 uppercase tracking-wider">Polarité</span>
                      <Tooltip content={DERIVATION_EXPLANATIONS.polarity}>
                        <HelpIcon />
                      </Tooltip>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">
                        {esotericReading.synthesis.polarity === "yin" ? "☯️" : esotericReading.synthesis.polarity === "yang" ? "☀️" : "⚖️"}
                      </span>
                      <span className="text-lg text-white capitalize">{esotericReading.synthesis.polarity}</span>
                    </div>
                    <div className="text-[10px] text-neutral-600 mt-2">
                      {quantumData.numbers.filter(n => n % 2 === 0).length} pairs / {quantumData.numbers.filter(n => n % 2 !== 0).length} impairs
                    </div>
                  </div>

                  <div className="p-4 bg-black/40 border border-neutral-800 rounded-xl">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider">Phase</span>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-2xl">
                        {esotericReading.synthesis.phase === "new" ? "🌑" :
                         esotericReading.synthesis.phase === "waxing" ? "🌓" :
                         esotericReading.synthesis.phase === "full" ? "🌕" : "🌗"}
                      </span>
                      <span className="text-lg text-white capitalize">{esotericReading.synthesis.phase}</span>
                    </div>
                    <div className="text-[10px] text-neutral-600 mt-2">
                      Basé sur le niveau d&apos;énergie
                    </div>
                  </div>
                </div>

                {/* Cosmic Tone */}
                <div className="p-5 bg-linear-to-r from-violet-900/20 to-emerald-900/20 border border-violet-500/20 rounded-xl">
                  <div className="text-xs text-violet-400 uppercase tracking-wider mb-2">Tonalité Cosmique</div>
                  <p className="text-lg text-white font-medium">
                    {esotericReading.synthesis.cosmicTone}
                  </p>
                  <p className="text-[10px] text-neutral-500 mt-2">
                    Combinaison de la polarité ({esotericReading.synthesis.polarity}) et de la phase ({esotericReading.synthesis.phase})
                  </p>
                </div>
              </div>
            )}

            {/* TAB: Traditions (Detailed) */}
            {activeTab === "traditions" && esotericReading && (
              <div className="space-y-4 animate-in fade-in duration-300">
                {/* I Ching - with derivation */}
                <div className="p-4 bg-black/40 border border-amber-900/30 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{esotericReading.iChing.symbol}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-amber-500 uppercase tracking-wider">I Ching</span>
                        <Tooltip content={DERIVATION_EXPLANATIONS.iChing}>
                          <HelpIcon />
                        </Tooltip>
                      </div>
                      <div className="text-base text-white font-medium">
                        Hexagramme #{esotericReading.iChing.hexagram} - {esotericReading.iChing.name}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                    {esotericReading.iChing.meaning}
                  </p>
                  <details className="group/detail">
                    <summary className="text-[10px] text-amber-600 cursor-pointer hover:text-amber-400">
                      Voir le calcul
                    </summary>
                    <div className="mt-2 p-2 bg-neutral-900/50 rounded-lg font-mono text-[10px] text-neutral-400">
                      <div>Bytes: [{quantumData.numbers.slice(0, 6).join(", ")}]</div>
                      <div>Lignes: [{quantumData.numbers.slice(0, 6).map(b => b & 1).join(", ")}]</div>
                      <div className="text-amber-400 mt-1">
                        → Hexagramme #{esotericReading.iChing.hexagram}
                      </div>
                    </div>
                  </details>
                </div>

                {/* Tarot - with derivation */}
                <div className="p-4 bg-black/40 border border-violet-900/30 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">{esotericReading.tarot.symbol}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-violet-500 uppercase tracking-wider">Tarot</span>
                        <Tooltip content={DERIVATION_EXPLANATIONS.tarot}>
                          <HelpIcon />
                        </Tooltip>
                      </div>
                      <div className="text-base text-white font-medium">
                        Arcane #{esotericReading.tarot.arcana} - {esotericReading.tarot.name}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {esotericReading.tarot.keywords.map((kw, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 bg-violet-900/30 text-violet-300 rounded-full">
                        {kw}
                      </span>
                    ))}
                  </div>
                  <details className="group/detail">
                    <summary className="text-[10px] text-violet-600 cursor-pointer hover:text-violet-400">
                      Voir le calcul
                    </summary>
                    <div className="mt-2 p-2 bg-neutral-900/50 rounded-lg font-mono text-[10px] text-neutral-400">
                      <div>Somme: {sum}</div>
                      <div>{sum} mod 22 = {sum % 22}</div>
                      <div className="text-violet-400 mt-1">
                        → Arcane #{esotericReading.tarot.arcana}
                      </div>
                    </div>
                  </details>
                </div>

                {/* Kabbalah - with derivation */}
                <div className="p-4 bg-black/40 border border-blue-900/30 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl font-serif text-blue-400">{esotericReading.kabbalah.hebrew}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-blue-500 uppercase tracking-wider">Kabbalah</span>
                        <Tooltip content={DERIVATION_EXPLANATIONS.kabbalah}>
                          <HelpIcon />
                        </Tooltip>
                      </div>
                      <div className="text-base text-white font-medium">
                        Sefirah #{esotericReading.kabbalah.sefirah} - {esotericReading.kabbalah.name}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-300">{esotericReading.kabbalah.attribute}</p>
                  <details className="group/detail mt-3">
                    <summary className="text-[10px] text-blue-600 cursor-pointer hover:text-blue-400">
                      Voir le calcul
                    </summary>
                    <div className="mt-2 p-2 bg-neutral-900/50 rounded-lg font-mono text-[10px] text-neutral-400">
                      <div>Somme: {sum}</div>
                      <div>({sum} mod 10) + 1 = {(sum % 10) + 1}</div>
                      <div className="text-blue-400 mt-1">
                        → Sefirah #{esotericReading.kabbalah.sefirah}
                      </div>
                    </div>
                  </details>
                </div>

                {/* Hermetic - with derivation */}
                <div className="p-4 bg-black/40 border border-emerald-900/30 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-3xl">⚗️</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-emerald-500 uppercase tracking-wider">Hermétique</span>
                        <Tooltip content={DERIVATION_EXPLANATIONS.hermetic}>
                          <HelpIcon />
                        </Tooltip>
                      </div>
                      <div className="text-base text-white font-medium">
                        Principe #{esotericReading.hermetic.principle} - {esotericReading.hermetic.name}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-300 italic mb-3">
                    &ldquo;{esotericReading.hermetic.axiom}&rdquo;
                  </p>
                  <details className="group/detail">
                    <summary className="text-[10px] text-emerald-600 cursor-pointer hover:text-emerald-400">
                      Voir le calcul
                    </summary>
                    <div className="mt-2 p-2 bg-neutral-900/50 rounded-lg font-mono text-[10px] text-neutral-400">
                      <div>Somme: {sum}</div>
                      <div>({sum} mod 7) + 1 = {(sum % 7) + 1}</div>
                      <div className="text-emerald-400 mt-1">
                        → Principe #{esotericReading.hermetic.principle}
                      </div>
                    </div>
                  </details>
                </div>

                {/* Elements & Sacred Geometry */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Elements */}
                  <div className="p-4 bg-black/40 border border-neutral-800 rounded-xl">
                    <div className="flex items-center gap-1 mb-3">
                      <span className="text-xs text-neutral-500 uppercase tracking-wider">Éléments</span>
                      <Tooltip content={DERIVATION_EXPLANATIONS.elements}>
                        <HelpIcon />
                      </Tooltip>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-4xl ${ELEMENT_SYMBOLS[esotericReading.elements.dominant]?.color || 'text-white'}`}>
                        {ELEMENT_SYMBOLS[esotericReading.elements.dominant]?.symbol || '?'}
                      </span>
                      <div>
                        <div className="text-lg text-white capitalize">{esotericReading.elements.dominant}</div>
                        <div className="text-[10px] text-neutral-500">Élément dominant</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      <div className="flex justify-between p-1.5 bg-neutral-900/50 rounded">
                        <span className="text-neutral-500">Physique</span>
                        <span className="text-neutral-300">{Math.round(esotericReading.elements.balance.physical * 100)}%</span>
                      </div>
                      <div className="flex justify-between p-1.5 bg-neutral-900/50 rounded">
                        <span className="text-neutral-500">Spirituel</span>
                        <span className="text-neutral-300">{Math.round(esotericReading.elements.balance.spiritual * 100)}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Sacred Geometry */}
                  <div className="p-4 bg-black/40 border border-neutral-800 rounded-xl">
                    <div className="flex items-center gap-1 mb-3">
                      <span className="text-xs text-neutral-500 uppercase tracking-wider">Géométrie Sacrée</span>
                      <Tooltip content={DERIVATION_EXPLANATIONS.sacredGeometry}>
                        <HelpIcon />
                      </Tooltip>
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl text-amber-300">φ</span>
                      <div>
                        <div className="text-lg text-white">
                          {Math.round(esotericReading.sacredGeometry.phiResonance * 100)}%
                        </div>
                        <div className="text-[10px] text-neutral-500">Résonance dorée</div>
                      </div>
                    </div>
                    <p className="text-xs text-neutral-400">
                      {esotericReading.sacredGeometry.harmonicFrequency}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Technical (Raw Data) */}
            {activeTab === "technical" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                {/* Raw Quantum Data */}
                <div className="p-6 bg-black/40 border border-neutral-800 rounded-2xl space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm text-white font-medium">Données Quantiques Brutes</h3>
                    <span className="text-[10px] text-neutral-500 font-mono">
                      {new Date(quantumData.timestamp).toLocaleString("fr-FR")}
                    </span>
                  </div>

                  <div className="p-3 bg-neutral-900/50 rounded-lg">
                    <div className="text-[10px] text-neutral-500 mb-2">Source</div>
                    <div className="text-sm text-violet-400 font-mono">{quantumData.source}</div>
                  </div>

                  {/* Bytes Grid with explanations */}
                  <div>
                    <div className="text-[10px] text-neutral-500 mb-2">8 Bytes (0-255)</div>
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                      {quantumData.numbers.map((n, i) => (
                        <div
                          key={i}
                          className="p-2 bg-neutral-800/50 rounded-lg border border-neutral-700/50 text-center"
                        >
                          <div className="text-xs font-mono text-violet-300">
                            {n.toString(16).toUpperCase().padStart(2, "0")}
                          </div>
                          <div className="text-[9px] text-neutral-600 mt-1">
                            {n}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Statistics */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 bg-neutral-900/50 rounded-lg text-center">
                      <div className="text-[10px] text-neutral-500">Somme</div>
                      <div className="text-sm text-white font-mono">{sum}</div>
                    </div>
                    <div className="p-3 bg-neutral-900/50 rounded-lg text-center">
                      <div className="text-[10px] text-neutral-500">Moyenne</div>
                      <div className="text-sm text-white font-mono">{average.toFixed(1)}</div>
                    </div>
                    <div className="p-3 bg-neutral-900/50 rounded-lg text-center">
                      <div className="text-[10px] text-neutral-500">Énergie</div>
                      <div className="text-sm text-white font-mono">{(average / 255 * 100).toFixed(1)}%</div>
                    </div>
                  </div>

                  <p className="text-[10px] text-neutral-600 text-center leading-relaxed">
                    Ces nombres proviennent d&apos;une mesure physique réelle de fluctuations quantiques du vide.
                    Ils sont véritablement aléatoires et non-déterministes, contrairement aux générateurs pseudo-aléatoires classiques.
                  </p>
                </div>

                {/* Math Explainer Section */}
                <div className="p-5 bg-blue-950/30 border border-blue-800/30 rounded-xl">
                  <h3 className="text-sm text-blue-300 font-medium mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    Comprendre les calculs (transparence totale)
                  </h3>

                  {/* What is Modulo */}
                  <div className="mb-4 p-4 bg-neutral-900/50 rounded-lg">
                    <h4 className="text-xs text-white font-medium mb-2">Qu&apos;est-ce que &quot;mod&quot; (modulo) ?</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                      Le modulo est le <strong className="text-white">reste de la division entière</strong>.
                      Il permet de transformer un grand nombre en un nombre plus petit dans une plage définie.
                    </p>
                    <div className="bg-black/40 p-3 rounded-lg font-mono text-xs">
                      <div className="text-neutral-500 mb-2">Exemple avec la somme {sum} et 22 arcanes du Tarot :</div>
                      <div className="space-y-1">
                        <div><span className="text-neutral-400">{sum} ÷ 22 = </span><span className="text-white">{Math.floor(sum / 22)}</span><span className="text-neutral-600"> (partie entière)</span></div>
                        <div><span className="text-neutral-400">{Math.floor(sum / 22)} × 22 = </span><span className="text-white">{Math.floor(sum / 22) * 22}</span></div>
                        <div><span className="text-neutral-400">{sum} - {Math.floor(sum / 22) * 22} = </span><span className="text-emerald-400 font-bold">{sum % 22}</span><span className="text-neutral-600"> (le reste = résultat)</span></div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-neutral-800 text-neutral-500">
                        Vérification : ({Math.floor(sum / 22)} × 22) + {sum % 22} = {Math.floor(sum / 22) * 22 + sum % 22} ✓
                      </div>
                    </div>
                  </div>

                  {/* Why these numbers */}
                  <div className="mb-4 p-4 bg-neutral-900/50 rounded-lg">
                    <h4 className="text-xs text-white font-medium mb-2">Pourquoi ces nombres spécifiques ?</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="text-violet-400 font-mono w-8">22</span>
                        <span className="text-neutral-400">= nombre d&apos;arcanes majeurs du Tarot (Le Mat à Le Monde)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-400 font-mono w-8">10</span>
                        <span className="text-neutral-400">= nombre de Sefirot dans l&apos;Arbre de Vie kabbalistique</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono w-8">7</span>
                        <span className="text-neutral-400">= nombre de principes hermétiques du Kybalion</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-amber-400 font-mono w-8">64</span>
                        <span className="text-neutral-400">= nombre d&apos;hexagrammes du I Ching (8 trigrammes × 8)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-400 font-mono w-8">255</span>
                        <span className="text-neutral-400">= valeur maximale d&apos;un byte (0-255), pour normaliser en %</span>
                      </div>
                    </div>
                  </div>

                  {/* Step by step for each */}
                  <div className="p-4 bg-neutral-900/50 rounded-lg">
                    <h4 className="text-xs text-white font-medium mb-3">Calculs détaillés pour cette lecture</h4>
                    <div className="space-y-3 text-[11px]">

                      {/* Tarot */}
                      <div className="p-2 bg-black/40 rounded border-l-2 border-violet-500">
                        <div className="text-violet-400 font-medium mb-1">Tarot</div>
                        <div className="font-mono text-neutral-400">
                          {sum} mod 22 = {sum % 22} → Arcane #{sum % 22}
                        </div>
                      </div>

                      {/* Kabbalah */}
                      <div className="p-2 bg-black/40 rounded border-l-2 border-blue-500">
                        <div className="text-blue-400 font-medium mb-1">Kabbalah</div>
                        <div className="font-mono text-neutral-400">
                          ({sum} mod 10) + 1 = {sum % 10} + 1 = {(sum % 10) + 1} → Sefirah #{(sum % 10) + 1}
                        </div>
                        <div className="text-neutral-600 mt-1">(+1 car les Sefirot vont de 1 à 10, pas de 0 à 9)</div>
                      </div>

                      {/* Hermetic */}
                      <div className="p-2 bg-black/40 rounded border-l-2 border-emerald-500">
                        <div className="text-emerald-400 font-medium mb-1">Hermétique</div>
                        <div className="font-mono text-neutral-400">
                          ({sum} mod 7) + 1 = {sum % 7} + 1 = {(sum % 7) + 1} → Principe #{(sum % 7) + 1}
                        </div>
                      </div>

                      {/* Energy */}
                      <div className="p-2 bg-black/40 rounded border-l-2 border-cyan-500">
                        <div className="text-cyan-400 font-medium mb-1">Énergie</div>
                        <div className="font-mono text-neutral-400">
                          moyenne({quantumData.numbers.join(" + ")}) / 8 = {average.toFixed(1)}
                        </div>
                        <div className="font-mono text-neutral-400">
                          {average.toFixed(1)} / 255 = {(average / 255).toFixed(3)} = {(average / 255 * 100).toFixed(1)}%
                        </div>
                      </div>

                      {/* I Ching */}
                      <div className="p-2 bg-black/40 rounded border-l-2 border-amber-500">
                        <div className="text-amber-400 font-medium mb-1">I Ching</div>
                        <div className="font-mono text-neutral-400 mb-1">
                          6 premiers bytes : [{quantumData.numbers.slice(0, 6).join(", ")}]
                        </div>
                        <div className="font-mono text-neutral-400 mb-1">
                          Bit de poids faible (pair=0, impair=1) : [{quantumData.numbers.slice(0, 6).map(b => b % 2).join(", ")}]
                        </div>
                        <div className="text-neutral-600">
                          Ces 6 bits forment 2 trigrammes (3 bits chacun) qui déterminent l&apos;hexagramme
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] text-neutral-500 mt-4 text-center">
                    Aucune magie ici : ce sont des formules mathématiques déterministes.
                    Les mêmes bytes donneront toujours les mêmes résultats.
                  </p>
                </div>
              </div>
            )}
          </div>
        </details>
      </div>
    </section>
  );
};
