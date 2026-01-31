"use client";

import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";
import { SynthesisTab, TraditionsTab, TechnicalTab } from "./tabs";
import type { QuantumData, EsotericReading } from "@/types/esoteric";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
});

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
  const [activeTab, setActiveTab] = useState<
    "synthesis" | "traditions" | "technical"
  >("synthesis");

  const sum = quantumData.numbers.reduce((a, b) => a + b, 0);
  const average = sum / quantumData.numbers.length;

  return (
    <section className="max-w-3xl mx-auto px-6 py-12 space-y-8">
      {/* Oracle Response */}
      <div className="relative p-8 md:p-12 bg-white/50 backdrop-blur-xl border border-white/60 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.03)]">
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsla(28, 90%, 60%, 0.2))",
              }}
              aria-hidden="true"
            />
            <span className="text-[11px] text-slate-500 font-mono uppercase tracking-[0.2em]">
              La Réponse de l&apos;Oracle
            </span>
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(90deg, hsla(270, 70%, 60%, 0.2), transparent)",
              }}
              aria-hidden="true"
            />
          </div>

          <p
            className={`${cormorant.className} text-xl md:text-2xl text-slate-900 leading-relaxed text-center font-light`}
          >
            &ldquo;{response}&rdquo;
          </p>
        </div>
      </div>

      {/* Quantum Fingerprints */}
      <div className="max-w-2xl mx-auto">
        <details className="group" open>
          <summary className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-mono uppercase tracking-[0.15em] cursor-pointer hover:text-slate-700 transition-colors duration-200 list-none">
            <span className="group-open:rotate-180 transition-transform duration-300">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            Empreintes quantiques
          </summary>

          <div className="mt-6 space-y-6">
            {/* Flow Diagram */}
            <div className="p-6 bg-white/40 backdrop-blur-sm border border-slate-100 rounded-2xl">
              <h3 className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.2em] mb-6 text-center">
                Flux de la consultation
              </h3>

              <div className="relative">
                <div
                  className="hidden md:block absolute top-5 left-[16.67%] right-[16.67%] h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, hsla(28, 90%, 60%, 0.25), hsla(270, 70%, 60%, 0.25), hsla(160, 60%, 50%, 0.25))",
                  }}
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center">
                  <div className="flex flex-col items-center md:px-4">
                    <div className="w-10 h-10 rounded-full border border-orange-200/60 flex items-center justify-center text-orange-500 text-xs font-mono bg-white relative">
                      01
                    </div>
                    <p className="text-slate-800 text-xs font-medium mt-3">
                      Source Quantique
                    </p>
                    <p className="text-slate-400 text-[10px] mt-0.5 font-mono">
                      {quantumData.source}
                    </p>
                  </div>

                  <div className="flex flex-col items-center md:px-4">
                    <div className="w-10 h-10 rounded-full border border-violet-200/60 flex items-center justify-center text-violet-500 text-xs font-mono bg-white relative">
                      02
                    </div>
                    <p className="text-slate-800 text-xs font-medium mt-3">
                      8 Bytes Aléatoires
                    </p>
                    <div className="flex justify-center gap-1 mt-1">
                      {quantumData.numbers.slice(0, 4).map((n, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-mono text-violet-500/80 bg-violet-50/50 px-1 py-0.5 rounded"
                        >
                          {n.toString(16).toUpperCase().padStart(2, "0")}
                        </span>
                      ))}
                      <span className="text-[10px] text-slate-300">…</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center md:px-4">
                    <div className="w-10 h-10 rounded-full border border-emerald-200/60 flex items-center justify-center text-emerald-500 text-xs font-mono bg-white relative">
                      03
                    </div>
                    <p className="text-slate-800 text-xs font-medium mt-3">
                      Interprétations
                    </p>
                    <p className="text-slate-400 text-[10px] mt-0.5">
                      6 traditions
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 text-center mt-6 leading-relaxed font-light">
                Fluctuations quantiques mesurées, converties en nombres, puis
                transformées en symboles via des formules déterministes.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center items-center gap-6">
              {(
                [
                  ["synthesis", "Synthèse"],
                  ["traditions", "Traditions"],
                  ["technical", "Données Brutes"],
                ] as const
              ).map(([key, label], i) => (
                <div key={key} className="flex items-center gap-6">
                  {i > 0 && (
                    <span
                      className="text-slate-200 text-xs"
                      aria-hidden="true"
                    >
                      ·
                    </span>
                  )}
                  <button
                    onClick={() => setActiveTab(key)}
                    className={`pb-1 text-[11px] tracking-[0.15em] uppercase font-mono transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-300 focus-visible:ring-offset-4 rounded-sm ${
                      activeTab === key
                        ? "text-slate-800 border-b border-orange-400/60"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    {label}
                  </button>
                </div>
              ))}
            </div>

            {activeTab === "synthesis" && esotericReading && (
              <SynthesisTab
                quantumData={quantumData}
                esotericReading={esotericReading}
                sum={sum}
                average={average}
              />
            )}

            {activeTab === "traditions" && esotericReading && (
              <TraditionsTab
                quantumData={quantumData}
                esotericReading={esotericReading}
                sum={sum}
              />
            )}

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
