"use client";

import { SimpleExplanation } from "./SimpleExplanation";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-32 md:py-44 lg:py-56 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Keep existing header */}
        <div className="text-center mb-24">
          <span className="text-[15px] font-medium tracking-wide text-[#D4A574]">
            Comment ça fonctionne
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-[#E6E5E0] tracking-[-0.03em] mt-5">
            Les Arcanes de l&apos;Oracle
          </h2>
          <p className="text-[#A49B8B] text-lg md:text-xl max-w-xl mx-auto leading-relaxed mt-6 tracking-tight">
            Bien plus qu&apos;une simple intelligence artificielle. Découvrez
            comment l&apos;entropie de l&apos;univers guide chaque mot.
          </p>
        </div>

        <SimpleExplanation />
      </div>
    </section>
  );
}
