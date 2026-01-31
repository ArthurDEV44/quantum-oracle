"use client";

import { Tooltip, HelpIcon } from "@/components/ui/Tooltip";
import {
  ELEMENT_SYMBOLS,
  DERIVATION_EXPLANATIONS,
} from "@/lib/esoteric-constants";
import type { QuantumData, EsotericReading } from "@/types/esoteric";

interface TraditionsTabProps {
  quantumData: QuantumData;
  esotericReading: EsotericReading;
  sum: number;
}

export const TraditionsTab = ({
  quantumData,
  esotericReading,
  sum,
}: TraditionsTabProps) => {
  return (
    <div className="space-y-4">
      {/* I Ching */}
      <div className="p-5 bg-white/40 backdrop-blur-sm border border-amber-100/40 rounded-2xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{esotericReading.iChing.symbol}</span>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-amber-600/80 font-mono uppercase tracking-[0.15em]">
                I Ching
              </span>
              <Tooltip content={DERIVATION_EXPLANATIONS.iChing}>
                <HelpIcon />
              </Tooltip>
            </div>
            <div className="text-sm text-slate-800 font-medium">
              Hexagramme #{esotericReading.iChing.hexagram} -{" "}
              {esotericReading.iChing.name}
            </div>
          </div>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed mb-3 font-light">
          {esotericReading.iChing.meaning}
        </p>
        <details className="group/detail">
          <summary className="text-[10px] text-amber-600/70 font-mono cursor-pointer hover:text-amber-600 transition-colors duration-200">
            Voir le calcul
          </summary>
          <div className="mt-2 p-2.5 bg-white/50 rounded-lg font-mono text-[10px] text-slate-400 border border-amber-50/60">
            <div>
              Bytes: [{quantumData.numbers.slice(0, 6).join(", ")}]
            </div>
            <div>
              Lignes: [
              {quantumData.numbers
                .slice(0, 6)
                .map((b) => b & 1)
                .join(", ")}
              ]
            </div>
            <div className="text-amber-600 mt-1">
              → Hexagramme #{esotericReading.iChing.hexagram}
            </div>
          </div>
        </details>
      </div>

      {/* Tarot */}
      <div className="p-5 bg-white/40 backdrop-blur-sm border border-violet-100/40 rounded-2xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{esotericReading.tarot.symbol}</span>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-violet-600/80 font-mono uppercase tracking-[0.15em]">
                Tarot
              </span>
              <Tooltip content={DERIVATION_EXPLANATIONS.tarot}>
                <HelpIcon />
              </Tooltip>
            </div>
            <div className="text-sm text-slate-800 font-medium">
              Arcane #{esotericReading.tarot.arcana} -{" "}
              {esotericReading.tarot.name}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {esotericReading.tarot.keywords.map((kw, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-0.5 bg-violet-50/50 text-violet-600/80 rounded-full font-mono"
            >
              {kw}
            </span>
          ))}
        </div>
        <details className="group/detail">
          <summary className="text-[10px] text-violet-600/70 font-mono cursor-pointer hover:text-violet-600 transition-colors duration-200">
            Voir le calcul
          </summary>
          <div className="mt-2 p-2.5 bg-white/50 rounded-lg font-mono text-[10px] text-slate-400 border border-violet-50/60">
            <div>Somme: {sum}</div>
            <div>
              {sum} mod 22 = {sum % 22}
            </div>
            <div className="text-violet-600 mt-1">
              → Arcane #{esotericReading.tarot.arcana}
            </div>
          </div>
        </details>
      </div>

      {/* Kabbalah */}
      <div className="p-5 bg-white/40 backdrop-blur-sm border border-blue-100/40 rounded-2xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl font-serif text-blue-500">
            {esotericReading.kabbalah.hebrew}
          </span>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-blue-600/80 font-mono uppercase tracking-[0.15em]">
                Kabbalah
              </span>
              <Tooltip content={DERIVATION_EXPLANATIONS.kabbalah}>
                <HelpIcon />
              </Tooltip>
            </div>
            <div className="text-sm text-slate-800 font-medium">
              Sefirah #{esotericReading.kabbalah.sefirah} -{" "}
              {esotericReading.kabbalah.name}
            </div>
          </div>
        </div>
        <p className="text-sm text-slate-600 font-light">
          {esotericReading.kabbalah.attribute}
        </p>
        <details className="group/detail mt-3">
          <summary className="text-[10px] text-blue-600/70 font-mono cursor-pointer hover:text-blue-600 transition-colors duration-200">
            Voir le calcul
          </summary>
          <div className="mt-2 p-2.5 bg-white/50 rounded-lg font-mono text-[10px] text-slate-400 border border-blue-50/60">
            <div>Somme: {sum}</div>
            <div>
              ({sum} mod 10) + 1 = {(sum % 10) + 1}
            </div>
            <div className="text-blue-600 mt-1">
              → Sefirah #{esotericReading.kabbalah.sefirah}
            </div>
          </div>
        </details>
      </div>

      {/* Hermetic */}
      <div className="p-5 bg-white/40 backdrop-blur-sm border border-emerald-100/40 rounded-2xl">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">⚗️</span>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="text-[10px] text-emerald-600/80 font-mono uppercase tracking-[0.15em]">
                Hermétique
              </span>
              <Tooltip content={DERIVATION_EXPLANATIONS.hermetic}>
                <HelpIcon />
              </Tooltip>
            </div>
            <div className="text-sm text-slate-800 font-medium">
              Principe #{esotericReading.hermetic.principle} -{" "}
              {esotericReading.hermetic.name}
            </div>
          </div>
        </div>
        <p className="text-sm text-slate-600 italic font-light mb-3">
          &ldquo;{esotericReading.hermetic.axiom}&rdquo;
        </p>
        <details className="group/detail">
          <summary className="text-[10px] text-emerald-600/70 font-mono cursor-pointer hover:text-emerald-600 transition-colors duration-200">
            Voir le calcul
          </summary>
          <div className="mt-2 p-2.5 bg-white/50 rounded-lg font-mono text-[10px] text-slate-400 border border-emerald-50/60">
            <div>Somme: {sum}</div>
            <div>
              ({sum} mod 7) + 1 = {(sum % 7) + 1}
            </div>
            <div className="text-emerald-600 mt-1">
              → Principe #{esotericReading.hermetic.principle}
            </div>
          </div>
        </details>
      </div>

      {/* Elements & Sacred Geometry */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-white/40 backdrop-blur-sm border border-slate-100 rounded-xl">
          <div className="flex items-center gap-1 mb-3">
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.15em]">
              Éléments
            </span>
            <Tooltip content={DERIVATION_EXPLANATIONS.elements}>
              <HelpIcon />
            </Tooltip>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`text-3xl ${ELEMENT_SYMBOLS[esotericReading.elements.dominant]?.color || "text-slate-900"}`}
            >
              {ELEMENT_SYMBOLS[esotericReading.elements.dominant]?.symbol ||
                "?"}
            </span>
            <div>
              <div className="text-base text-slate-800 capitalize">
                {esotericReading.elements.dominant}
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                Élément dominant
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="flex justify-between p-1.5 bg-white/50 rounded border border-slate-100/60">
              <span className="text-slate-400 font-mono">Physique</span>
              <span className="text-slate-600 font-mono">
                {Math.round(
                  esotericReading.elements.balance.physical * 100
                )}
                %
              </span>
            </div>
            <div className="flex justify-between p-1.5 bg-white/50 rounded border border-slate-100/60">
              <span className="text-slate-400 font-mono">Spirituel</span>
              <span className="text-slate-600 font-mono">
                {Math.round(
                  esotericReading.elements.balance.spiritual * 100
                )}
                %
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-white/40 backdrop-blur-sm border border-slate-100 rounded-xl">
          <div className="flex items-center gap-1 mb-3">
            <span className="text-[10px] text-slate-400 font-mono uppercase tracking-[0.15em]">
              Géométrie Sacrée
            </span>
            <Tooltip content={DERIVATION_EXPLANATIONS.sacredGeometry}>
              <HelpIcon />
            </Tooltip>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl text-amber-500">φ</span>
            <div>
              <div className="text-base text-slate-800">
                {Math.round(
                  esotericReading.sacredGeometry.phiResonance * 100
                )}
                %
              </div>
              <div className="text-[10px] text-slate-400 font-mono">
                Résonance dorée
              </div>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 font-light">
            {esotericReading.sacredGeometry.harmonicFrequency}
          </p>
        </div>
      </div>
    </div>
  );
};
