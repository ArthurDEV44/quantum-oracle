"use client";

import { useState } from "react";
import { SynthesisTab, TraditionsTab, TechnicalTab } from "./tabs";
import type { QuantumData, EsotericReading } from "@/types/esoteric";

interface ConsultResultSectionProps {
  response: string;
  quantumData: QuantumData;
  esotericReading?: EsotericReading;
}

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
      <div className="relative p-8 md:p-12 bg-white border border-indigo-100 rounded-3xl shadow-xl shadow-indigo-50/50">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-600/5 blur-2xl rounded-full" />
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-600/5 blur-2xl rounded-full" />

        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-3 text-indigo-600 mb-2">
            <div className="h-px flex-1 bg-linear-to-r from-transparent to-indigo-500/20" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">La Réponse de l&apos;Oracle</span>
            <div className="h-px flex-1 bg-linear-to-l from-transparent to-indigo-500/20" />
          </div>

          <p className="text-xl md:text-2xl text-slate-900 leading-relaxed text-center font-medium italic">
            &ldquo;{response}&rdquo;
          </p>
        </div>
      </div>

      {/* Quantum Fingerprints - Redesigned */}
      <div className="max-w-2xl mx-auto">
        <details className="group" open>
          <summary className="flex items-center justify-center gap-2 text-sm text-slate-500 cursor-pointer hover:text-slate-800 transition-colors list-none">
            <span className="group-open:rotate-180 transition-transform duration-300">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            Comprendre les empreintes quantiques
          </summary>

          <div className="mt-6 space-y-6">
            {/* LEVEL 1: Quantum Flow Visualization */}
            <div className="p-5 bg-white border border-indigo-100 rounded-2xl shadow-sm">
              <h3 className="text-xs text-indigo-600 uppercase tracking-wider mb-4 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Comment ça fonctionne
              </h3>

              {/* Flow Diagram */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
                {/* Step 1: Quantum Source */}
                <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-2xl mb-2">🎲</div>
                  <div className="text-xs text-slate-600 font-medium">Source Quantique</div>
                  <div className="text-[10px] text-slate-400 mt-1">{quantumData.source}</div>
                </div>

                {/* Arrow */}
                <div className="text-slate-300 rotate-90 md:rotate-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                {/* Step 2: Raw Bytes */}
                <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex justify-center gap-1 mb-2">
                    {quantumData.numbers.slice(0, 4).map((n, i) => (
                      <span key={i} className="text-xs font-mono text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                        {n.toString(16).toUpperCase().padStart(2, "0")}
                      </span>
                    ))}
                    <span className="text-xs text-slate-400">...</span>
                  </div>
                  <div className="text-xs text-slate-600 font-medium">8 Bytes Aléatoires</div>
                  <div className="text-[10px] text-slate-400 mt-1">Somme: {sum}</div>
                </div>

                {/* Arrow */}
                <div className="text-slate-300 rotate-90 md:rotate-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                {/* Step 3: Interpretation */}
                <div className="flex-1 p-3 bg-slate-50 rounded-xl border border-emerald-100">
                  <div className="text-2xl mb-2">✨</div>
                  <div className="text-xs text-slate-600 font-medium">Interprétations</div>
                  <div className="text-[10px] text-slate-400 mt-1">6 traditions</div>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 text-center mt-4 leading-relaxed">
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
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                Synthèse
              </button>
              <button
                onClick={() => setActiveTab("traditions")}
                className={`px-4 py-2 text-xs rounded-full transition-all ${
                  activeTab === "traditions"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                Traditions
              </button>
              <button
                onClick={() => setActiveTab("technical")}
                className={`px-4 py-2 text-xs rounded-full transition-all ${
                  activeTab === "technical"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                Données Brutes
              </button>
            </div>

            {/* TAB: Synthesis (Simple Overview) */}
            {activeTab === "synthesis" && esotericReading && (
              <SynthesisTab
                quantumData={quantumData}
                esotericReading={esotericReading}
                sum={sum}
                average={average}
              />
            )}

            {/* TAB: Traditions (Detailed) */}
            {activeTab === "traditions" && esotericReading && (
              <TraditionsTab
                quantumData={quantumData}
                esotericReading={esotericReading}
                sum={sum}
              />
            )}

            {/* TAB: Technical (Raw Data) */}
            {activeTab === "technical" && (
              <TechnicalTab
                quantumData={quantumData}
                sum={sum}
                average={average}
              />
            )}
          </div>
        </details>
      </div>
    </section>
  );
};
