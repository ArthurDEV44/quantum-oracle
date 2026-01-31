import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const HistoryHeroSection = () => {
  return (
    <section className="relative py-16 overflow-hidden text-center">
      {/* Warm ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, hsla(270, 76%, 65%, 0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-5">
        <span className="text-[11px] tracking-[0.35em] uppercase text-slate-500 font-mono">
          Vos consultations
        </span>

        <h1
          className={`${cormorant.className} text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight`}
        >
          Chroniques Quantiques
        </h1>

        <p className="text-slate-500 text-sm md:text-[15px] max-w-md mx-auto leading-relaxed font-light tracking-wide">
          Les échos de vos consultations passées, gravées dans la trame de
          l&apos;espace-temps quantique.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-2.5 text-[11px] uppercase tracking-[0.2em] font-mono text-white rounded-full hover:opacity-90 transition-opacity duration-200 active:scale-95 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2"
            style={{
              background:
                "linear-gradient(135deg, #f97316 0%, #a855f7 100%)",
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
          </Link>
        </div>
      </div>
    </section>
  );
};
