"use client";

import { useState } from "react";
import type { ViewMode } from "./constants";
import { SimpleExplanation } from "./SimpleExplanation";
import { TechnicalExplanation } from "./TechnicalExplanation";

export function HowItWorksSection() {
  const [viewMode, setViewMode] = useState<ViewMode>("simple");

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-violet-600/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-indigo-600/5 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Les Arcanes de l&apos;Oracle
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-violet-500 to-transparent mx-auto" />
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg italic">
            Bien plus qu&apos;une simple intelligence artificielle. Découvrez comment l&apos;entropie de l&apos;univers guide chaque mot.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-1.5 shadow-2xl">
            <button
              onClick={() => setViewMode("simple")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                viewMode === "simple"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-900/20"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              Vision Intuitive
            </button>
            <button
              onClick={() => setViewMode("technical")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                viewMode === "technical"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-900/20"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              Anatomie Technique
            </button>
          </div>
        </div>

        <div className="transition-all duration-500">
          {viewMode === "simple" ? <SimpleExplanation /> : <TechnicalExplanation />}
        </div>
      </div>
    </section>
  );
}
