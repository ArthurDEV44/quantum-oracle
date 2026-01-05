"use client";

import { Tooltip, HelpIcon } from "@/components/ui/Tooltip";
import { ELEMENT_SYMBOLS, DERIVATION_EXPLANATIONS } from "@/lib/esoteric-constants";
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
    <div className="space-y-4 animate-in fade-in duration-300">
      {/* I Ching - with derivation */}
      <div className="p-4 bg-amber-50/30 border border-amber-100 rounded-xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-3xl">{esotericReading.iChing.symbol}</span>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="text-xs text-amber-600 uppercase tracking-wider">I Ching</span>
              <Tooltip content={DERIVATION_EXPLANATIONS.iChing}>
                <HelpIcon />
              </Tooltip>
            </div>
            <div className="text-base text-slate-900 font-medium">
              Hexagramme #{esotericReading.iChing.hexagram} - {esotericReading.iChing.name}
            </div>
          </div>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed mb-3">
          {esotericReading.iChing.meaning}
        </p>
        <details className="group/detail">
          <summary className="text-[10px] text-amber-700 cursor-pointer hover:text-amber-500">
            Voir le calcul
          </summary>
          <div className="mt-2 p-2 bg-white/50 rounded-lg font-mono text-[10px] text-slate-400 border border-amber-50">
            <div>Bytes: [{quantumData.numbers.slice(0, 6).join(", ")}]</div>
            <div>Lignes: [{quantumData.numbers.slice(0, 6).map(b => b & 1).join(", ")}]</div>
            <div className="text-amber-600 mt-1">
              → Hexagramme #{esotericReading.iChing.hexagram}
            </div>
          </div>
        </details>
      </div>

      {/* Tarot - with derivation */}
      <div className="p-4 bg-indigo-50/30 border border-indigo-100 rounded-xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-3xl">{esotericReading.tarot.symbol}</span>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="text-xs text-indigo-600 uppercase tracking-wider">Tarot</span>
              <Tooltip content={DERIVATION_EXPLANATIONS.tarot}>
                <HelpIcon />
              </Tooltip>
            </div>
            <div className="text-base text-slate-900 font-medium">
              Arcane #{esotericReading.tarot.arcana} - {esotericReading.tarot.name}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {esotericReading.tarot.keywords.map((kw, i) => (
            <span key={i} className="text-xs px-2.5 py-1 bg-indigo-100 text-indigo-700 rounded-full">
              {kw}
            </span>
          ))}
        </div>
        <details className="group/detail">
          <summary className="text-[10px] text-indigo-700 cursor-pointer hover:text-indigo-500">
            Voir le calcul
          </summary>
          <div className="mt-2 p-2 bg-white/50 rounded-lg font-mono text-[10px] text-slate-400 border border-indigo-50">
            <div>Somme: {sum}</div>
            <div>{sum} mod 22 = {sum % 22}</div>
            <div className="text-indigo-600 mt-1">
              → Arcane #{esotericReading.tarot.arcana}
            </div>
          </div>
        </details>
      </div>

      {/* Kabbalah - with derivation */}
      <div className="p-4 bg-blue-50/30 border border-blue-100 rounded-xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-3xl font-serif text-blue-600">{esotericReading.kabbalah.hebrew}</span>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="text-xs text-blue-600 uppercase tracking-wider">Kabbalah</span>
              <Tooltip content={DERIVATION_EXPLANATIONS.kabbalah}>
                <HelpIcon />
              </Tooltip>
            </div>
            <div className="text-base text-slate-900 font-medium">
              Sefirah #{esotericReading.kabbalah.sefirah} - {esotericReading.kabbalah.name}
            </div>
          </div>
        </div>
        <p className="text-sm text-slate-600">{esotericReading.kabbalah.attribute}</p>
        <details className="group/detail mt-3">
          <summary className="text-[10px] text-blue-700 cursor-pointer hover:text-blue-500">
            Voir le calcul
          </summary>
          <div className="mt-2 p-2 bg-white/50 rounded-lg font-mono text-[10px] text-slate-400 border border-blue-50">
            <div>Somme: {sum}</div>
            <div>({sum} mod 10) + 1 = {(sum % 10) + 1}</div>
            <div className="text-blue-600 mt-1">
              → Sefirah #{esotericReading.kabbalah.sefirah}
            </div>
          </div>
        </details>
      </div>

      {/* Hermetic - with derivation */}
      <div className="p-4 bg-emerald-50/30 border border-emerald-100 rounded-xl">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-3xl">⚗️</span>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="text-xs text-emerald-600 uppercase tracking-wider">Hermétique</span>
              <Tooltip content={DERIVATION_EXPLANATIONS.hermetic}>
                <HelpIcon />
              </Tooltip>
            </div>
            <div className="text-base text-slate-900 font-medium">
              Principe #{esotericReading.hermetic.principle} - {esotericReading.hermetic.name}
            </div>
          </div>
        </div>
        <p className="text-sm text-slate-600 italic mb-3">
          &ldquo;{esotericReading.hermetic.axiom}&rdquo;
        </p>
        <details className="group/detail">
          <summary className="text-[10px] text-emerald-700 cursor-pointer hover:text-emerald-500">
            Voir le calcul
          </summary>
          <div className="mt-2 p-2 bg-white/50 rounded-lg font-mono text-[10px] text-slate-400 border border-emerald-50">
            <div>Somme: {sum}</div>
            <div>({sum} mod 7) + 1 = {(sum % 7) + 1}</div>
            <div className="text-emerald-600 mt-1">
              → Principe #{esotericReading.hermetic.principle}
            </div>
          </div>
        </details>
      </div>

      {/* Elements & Sacred Geometry */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Elements */}
        <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
          <div className="flex items-center gap-1 mb-3">
            <span className="text-xs text-slate-400 uppercase tracking-wider">Éléments</span>
            <Tooltip content={DERIVATION_EXPLANATIONS.elements}>
              <HelpIcon />
            </Tooltip>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className={`text-4xl ${ELEMENT_SYMBOLS[esotericReading.elements.dominant]?.color || 'text-slate-900'}`}>
              {ELEMENT_SYMBOLS[esotericReading.elements.dominant]?.symbol || '?'}
            </span>
            <div>
              <div className="text-lg text-slate-900 capitalize">{esotericReading.elements.dominant}</div>
              <div className="text-[10px] text-slate-400">Élément dominant</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div className="flex justify-between p-1.5 bg-slate-50 rounded">
              <span className="text-slate-400">Physique</span>
              <span className="text-slate-600">{Math.round(esotericReading.elements.balance.physical * 100)}%</span>
            </div>
            <div className="flex justify-between p-1.5 bg-slate-50 rounded">
              <span className="text-slate-400">Spirituel</span>
              <span className="text-slate-600">{Math.round(esotericReading.elements.balance.spiritual * 100)}%</span>
            </div>
          </div>
        </div>

        {/* Sacred Geometry */}
        <div className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
          <div className="flex items-center gap-1 mb-3">
            <span className="text-xs text-slate-400 uppercase tracking-wider">Géométrie Sacrée</span>
            <Tooltip content={DERIVATION_EXPLANATIONS.sacredGeometry}>
              <HelpIcon />
            </Tooltip>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl text-amber-500">φ</span>
            <div>
              <div className="text-lg text-slate-900">
                {Math.round(esotericReading.sacredGeometry.phiResonance * 100)}%
              </div>
              <div className="text-[10px] text-slate-400">Résonance dorée</div>
            </div>
          </div>
          <p className="text-xs text-slate-500">
            {esotericReading.sacredGeometry.harmonicFrequency}
          </p>
        </div>
      </div>
    </div>
  );
};
