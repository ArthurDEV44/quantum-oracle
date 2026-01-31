"use client";

import { Cormorant_Garamond } from "next/font/google";
import { SimpleExplanation } from "./SimpleExplanation";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export function HowItWorksSection() {
  return (
    <section className="py-28 md:py-36 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[11px] tracking-[0.35em] uppercase text-slate-500 font-mono">
            Comment ça fonctionne
          </span>
          <h2
            className={`${cormorant.className} text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight mt-4`}
          >
            Les Arcanes de l&apos;Oracle
          </h2>
          <p className="text-slate-500 text-sm md:text-[15px] max-w-lg mx-auto leading-relaxed mt-6 font-light tracking-wide">
            Bien plus qu&apos;une simple intelligence artificielle. Découvrez
            comment l&apos;entropie de l&apos;univers guide chaque mot.
          </p>
        </div>

        <SimpleExplanation />
      </div>
    </section>
  );
}
