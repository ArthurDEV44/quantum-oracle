"use client";

import { Tooltip, HelpIcon } from "@/components/ui/Tooltip";
import { DERIVATION_EXPLANATIONS } from "@/lib/esoteric-constants";
import type { QuantumData, EsotericReading } from "@/types/esoteric";

interface SynthesisTabProps {
  quantumData: QuantumData;
  esotericReading: EsotericReading;
  sum: number;
  average: number;
}

export const SynthesisTab = ({
  quantumData,
  esotericReading,
  average,
}: SynthesisTabProps) => {
  return (
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
  );
};
