import Link from "next/link";

import { Button } from "@/components/ui/button";

export const HistoryHeroSection = () => {
  return (
    <section className="relative py-16 overflow-hidden text-center">
      {/* Ambient glow — radial gradient violet subtil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(124, 58, 237, 0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-5">
        {/* Overline — warm gold */}
        <span className="text-[13px] font-medium tracking-wide text-[#D4A574]">
          Vos consultations
        </span>

        {/* Titre — Instrument Serif italic (inherited from globals.css h1 rules) */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#E6E5E0] tracking-[-0.03em]">
          Chroniques Quantiques
        </h1>

        {/* Subtitle */}
        <p className="text-[#A49B8B] text-[15px] md:text-lg max-w-md mx-auto leading-relaxed tracking-tight">
          Les échos de vos consultations passées, gravées dans la trame de
          l&apos;espace-temps quantique.
        </p>

        {/* CTA — CossUI Button with gradient violet */}
        <div className="pt-4">
          <Button
            render={<Link href="/" />}
            className="group inline-flex items-center gap-2.5 rounded-full text-[13px] text-white border-none hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
            size="lg"
            style={{
              background:
                "linear-gradient(135deg, #4338CA 0%, #6D28D9 50%, #7C3AED 100%)",
              boxShadow: "0 0 40px rgba(124, 58, 237, 0.15)",
            }}
          >
            <span>Nouvelle Consultation</span>
            <svg
              className="w-3.5 h-3.5 group-hover:rotate-90 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};
