interface QuantumData {
  numbers: number[];
  timestamp: string;
  source: string;
}

interface ConsultResultSectionProps {
  response: string;
  quantumData: QuantumData;
}

export const ConsultResultSection = ({
  response,
  quantumData,
}: ConsultResultSectionProps) => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
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

      <div className="max-w-xl mx-auto">
        <details className="group">
          <summary className="flex items-center justify-center gap-2 text-sm text-neutral-500 cursor-pointer hover:text-neutral-300 transition-colors list-none">
            <span className="group-open:rotate-180 transition-transform duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            Voir les empreintes quantiques
          </summary>
          
          <div className="mt-4 p-6 bg-black/40 border border-neutral-800 rounded-2xl space-y-4">
            <div className="flex justify-between text-[10px] text-neutral-500 font-mono uppercase tracking-widest">
              <span>Source: {quantumData.source}</span>
              <span>{new Date(quantumData.timestamp).toLocaleString("fr-FR")}</span>
            </div>
            
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
              {quantumData.numbers.map((n, i) => (
                <div
                  key={i}
                  className="aspect-square flex items-center justify-center bg-neutral-800/50 rounded-lg text-xs font-mono text-violet-300 border border-neutral-700/50"
                  title={`Byte quantique #${i + 1}`}
                >
                  {n.toString(16).toUpperCase().padStart(2, "0")}
                </div>
              ))}
            </div>
            <p className="text-[10px] text-neutral-600 text-center italic">
              Ces nombres proviennent d&apos;une mesure physique réelle de fluctuations quantiques.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
};

