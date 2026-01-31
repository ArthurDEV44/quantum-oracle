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
    <div className="space-y-4">
      {/* Energy */}
      <div className="p-5 bg-white/40 backdrop-blur-sm border border-slate-100 rounded-2xl">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-1">
            <span className="text-sm text-slate-800 font-medium">
              Énergie Cosmique
            </span>
            <Tooltip content={DERIVATION_EXPLANATIONS.energy}>
              <HelpIcon />
            </Tooltip>
          </div>
          <span className="text-lg font-mono text-orange-500">
            {Math.round(esotericReading.synthesis.energy * 100)}%
          </span>
        </div>
        <div className="h-2 bg-slate-100/60 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-[width] duration-1000"
            style={{
              width: `${esotericReading.synthesis.energy * 100}%`,
              background:
                "linear-gradient(90deg, #f97316, #a855f7, #3b82f6)",
            }}
          />
        </div>
        <div className="mt-3 p-3 bg-white/50 rounded-lg border border-slate-100/60">
          <div className="text-[10px] text-slate-400 font-mono mb-1">
            Calcul
          </div>
          <div className="text-[11px] font-mono text-slate-500">
            moyenne({quantumData.numbers.slice(0, 4).join(", ")}…) / 255 ={" "}
            {(average / 255).toFixed(3)}
          </div>
        </div>
      </div>

      {/* Polarity & Phase */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-white/40 backdrop-blur-sm border border-slate-100 rounded-xl">
          <div className="flex items-center gap-1 mb-2">
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.15em]">
              Polarité
            </span>
            <Tooltip content={DERIVATION_EXPLANATIONS.polarity}>
              <HelpIcon />
            </Tooltip>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">
              {esotericReading.synthesis.polarity === "yin"
                ? "☯️"
                : esotericReading.synthesis.polarity === "yang"
                  ? "☀️"
                  : "⚖️"}
            </span>
            <span className="text-base text-slate-800 capitalize">
              {esotericReading.synthesis.polarity}
            </span>
          </div>
          <div className="text-[10px] text-slate-400 mt-2 font-mono">
            {quantumData.numbers.filter((n) => n % 2 === 0).length} pairs /{" "}
            {quantumData.numbers.filter((n) => n % 2 !== 0).length} impairs
          </div>
        </div>

        <div className="p-4 bg-white/40 backdrop-blur-sm border border-slate-100 rounded-xl">
          <span className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.15em]">
            Phase
          </span>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-2xl">
              {esotericReading.synthesis.phase === "new"
                ? "🌑"
                : esotericReading.synthesis.phase === "waxing"
                  ? "🌓"
                  : esotericReading.synthesis.phase === "full"
                    ? "🌕"
                    : "🌗"}
            </span>
            <span className="text-base text-slate-800 capitalize">
              {esotericReading.synthesis.phase}
            </span>
          </div>
          <div className="text-[10px] text-slate-400 mt-2 font-mono">
            Basé sur le niveau d&apos;énergie
          </div>
        </div>
      </div>

      {/* Cosmic Tone */}
      <div
        className="p-5 rounded-xl border border-white/60"
        style={{
          background:
            "linear-gradient(135deg, hsla(28, 90%, 72%, 0.08), hsla(270, 70%, 65%, 0.06), hsla(160, 60%, 55%, 0.06))",
        }}
      >
        <div className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] mb-2">
          Tonalité Cosmique
        </div>
        <p className="text-base text-slate-900 font-medium">
          {esotericReading.synthesis.cosmicTone}
        </p>
        <p className="text-[10px] text-slate-400 mt-2 font-light">
          Combinaison de la polarité (
          {esotericReading.synthesis.polarity}) et de la phase (
          {esotericReading.synthesis.phase})
        </p>
      </div>
    </div>
  );
};
