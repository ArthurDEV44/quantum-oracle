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

export const ConsultResultSection = ({
  response,
  quantumData,
  esotericReading,
}: ConsultResultSectionProps) => {
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

      {/* Quantum Fingerprints */}
      <div className="max-w-xl mx-auto">
        <details className="group" open>
          <summary className="flex items-center justify-center gap-2 text-sm text-neutral-500 cursor-pointer hover:text-neutral-300 transition-colors list-none">
            <span className="group-open:rotate-180 transition-transform duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            Voir les empreintes quantiques
          </summary>

          <div className="mt-4 space-y-4">
            {/* Synthesis - Energy Bar */}
            {esotericReading && (
              <div className="p-4 bg-black/40 border border-neutral-800 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-neutral-500 uppercase tracking-wider">Énergie Cosmique</span>
                  <span className="text-sm font-mono text-violet-400">
                    {Math.round(esotericReading.synthesis.energy * 100)}%
                  </span>
                </div>
                <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-emerald-500 rounded-full transition-all duration-1000"
                    style={{ width: `${esotericReading.synthesis.energy * 100}%` }}
                  />
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-neutral-600">
                  <span>Polarité: {esotericReading.synthesis.polarity}</span>
                  <span>Phase: {esotericReading.synthesis.phase}</span>
                </div>
              </div>
            )}

            {/* Esoteric Traditions Grid */}
            {esotericReading && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* I Ching */}
                <div className="p-4 bg-black/40 border border-amber-900/30 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{esotericReading.iChing.symbol}</span>
                    <div>
                      <div className="text-xs text-amber-500 uppercase tracking-wider">I Ching</div>
                      <div className="text-sm text-white font-medium">
                        {esotericReading.iChing.name}
                      </div>
                    </div>
                    <span className="ml-auto text-xs text-neutral-600">#{esotericReading.iChing.hexagram}</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {esotericReading.iChing.meaning}
                  </p>
                </div>

                {/* Tarot */}
                <div className="p-4 bg-black/40 border border-violet-900/30 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{esotericReading.tarot.symbol}</span>
                    <div>
                      <div className="text-xs text-violet-500 uppercase tracking-wider">Tarot</div>
                      <div className="text-sm text-white font-medium">
                        {esotericReading.tarot.name}
                      </div>
                    </div>
                    <span className="ml-auto text-xs text-neutral-600">#{esotericReading.tarot.arcana}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {esotericReading.tarot.keywords.map((kw, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 bg-violet-900/30 text-violet-300 rounded-full">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Kabbalah */}
                <div className="p-4 bg-black/40 border border-blue-900/30 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl font-serif text-blue-400">{esotericReading.kabbalah.hebrew}</span>
                    <div>
                      <div className="text-xs text-blue-500 uppercase tracking-wider">Kabbalah</div>
                      <div className="text-sm text-white font-medium">
                        {esotericReading.kabbalah.name}
                      </div>
                    </div>
                    <span className="ml-auto text-xs text-neutral-600">#{esotericReading.kabbalah.sefirah}</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    {esotericReading.kabbalah.attribute}
                  </p>
                </div>

                {/* Hermetic */}
                <div className="p-4 bg-black/40 border border-emerald-900/30 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">⚗️</span>
                    <div>
                      <div className="text-xs text-emerald-500 uppercase tracking-wider">Hermétique</div>
                      <div className="text-sm text-white font-medium">
                        {esotericReading.hermetic.name}
                      </div>
                    </div>
                    <span className="ml-auto text-xs text-neutral-600">#{esotericReading.hermetic.principle}</span>
                  </div>
                  <p className="text-xs text-neutral-400 italic">
                    &ldquo;{esotericReading.hermetic.axiom}&rdquo;
                  </p>
                </div>
              </div>
            )}

            {/* Elements & Sacred Geometry */}
            {esotericReading && (
              <div className="grid grid-cols-2 gap-3">
                {/* Dominant Element */}
                <div className="p-4 bg-black/40 border border-neutral-800 rounded-xl">
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Élément Dominant</div>
                  <div className="flex items-center gap-2">
                    <span className={`text-3xl ${ELEMENT_SYMBOLS[esotericReading.elements.dominant]?.color || 'text-white'}`}>
                      {ELEMENT_SYMBOLS[esotericReading.elements.dominant]?.symbol || '?'}
                    </span>
                    <span className="text-lg text-white capitalize">
                      {esotericReading.elements.dominant}
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-1 text-[10px]">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Physique</span>
                      <span className="text-neutral-400">{Math.round(esotericReading.elements.balance.physical * 100)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Spirituel</span>
                      <span className="text-neutral-400">{Math.round(esotericReading.elements.balance.spiritual * 100)}%</span>
                    </div>
                  </div>
                </div>

                {/* Sacred Geometry */}
                <div className="p-4 bg-black/40 border border-neutral-800 rounded-xl">
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-2">Géométrie Sacrée</div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">φ</span>
                    <span className="text-lg text-white">
                      {Math.round(esotericReading.sacredGeometry.phiResonance * 100)}%
                    </span>
                  </div>
                  <p className="text-[10px] text-neutral-500">
                    Résonance au nombre d&apos;or
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">
                    {esotericReading.sacredGeometry.harmonicFrequency}
                  </p>
                </div>
              </div>
            )}

            {/* Cosmic Tone */}
            {esotericReading && (
              <div className="p-4 bg-gradient-to-r from-violet-900/20 to-emerald-900/20 border border-violet-500/20 rounded-xl">
                <div className="text-xs text-violet-400 uppercase tracking-wider mb-1">Tonalité Cosmique</div>
                <p className="text-sm text-white">
                  {esotericReading.synthesis.cosmicTone}
                </p>
              </div>
            )}

            {/* Raw Quantum Data */}
            <div className="p-6 bg-black/40 border border-neutral-800 rounded-2xl space-y-4">
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
                <span>Source: {quantumData.source}</span>
                <span>{new Date(quantumData.timestamp).toLocaleString("fr-FR")}</span>
              </div>

              <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                {quantumData.numbers.map((n, i) => (
                  <div
                    key={i}
                    className="aspect-square flex items-center justify-center bg-neutral-800/50 rounded-lg text-xs font-mono text-violet-300 border border-neutral-700/50"
                    title={`Byte quantique #${i + 1}: ${n} (0x${n.toString(16).toUpperCase().padStart(2, "0")})`}
                  >
                    {n.toString(16).toUpperCase().padStart(2, "0")}
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-neutral-600 text-center italic">
                Ces nombres proviennent d&apos;une mesure physique réelle de fluctuations quantiques.
              </p>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
};
