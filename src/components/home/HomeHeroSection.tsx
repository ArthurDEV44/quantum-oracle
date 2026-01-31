import { SignInButton } from "@clerk/nextjs";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
});

interface HomeHeroSectionProps {
  isSignedIn: boolean;
}

export const HomeHeroSection = ({ isSignedIn }: HomeHeroSectionProps) => {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden text-center">
      {/* Warm ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 10%, hsla(28, 100%, 72%, 0.14) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 80% 20%, hsla(270, 76%, 65%, 0.08) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* Quantum orbital rings - warm tinted */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none motion-reduce:hidden"
        aria-hidden="true"
      >
        <div className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-orange-300/[0.06] animate-[spin_120s_linear_infinite]" />
      </div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none motion-reduce:hidden"
        aria-hidden="true"
      >
        <div className="w-[350px] h-[350px] md:w-[480px] md:h-[480px] rounded-full border border-violet-300/[0.05] animate-[spin_80s_linear_infinite_reverse]" />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Micro-label */}
        <div className="hero-enter hero-delay-1 mb-10">
          <span className="text-[11px] tracking-[0.35em] uppercase text-slate-500 font-mono">
            Entropie quantique
          </span>
        </div>

        {/* Title */}
        <h1 className={cormorant.className}>
          <span className="hero-enter hero-delay-2 block text-6xl md:text-8xl lg:text-[8.5rem] font-light tracking-[-0.02em] text-slate-900 leading-[0.85]">
            L&apos;Oracle
          </span>
          <span
            className="hero-enter hero-delay-3 block text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mt-1 md:mt-2 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #f97316 0%, #a855f7 50%, #3b82f6 100%)",
            }}
          >
            Quantique
          </span>
        </h1>

        {/* Decorative divider */}
        <div
          className="hero-enter hero-delay-4 flex items-center justify-center gap-3 my-10"
          aria-hidden="true"
        >
          <div className="w-8 h-px bg-orange-300/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-violet-400/50" />
          <div className="w-8 h-px bg-blue-300/40" />
        </div>

        {/* Subtitle */}
        <p className="hero-enter hero-delay-5 text-slate-500 text-sm md:text-[15px] max-w-sm mx-auto leading-relaxed tracking-wide font-light">
          Réponses uniques nées de l&apos;entropie pure de l&apos;univers.
          <br />
          Sagesse ancestrale et physique quantique, réunies.
        </p>

        {!isSignedIn && (
          <div className="hero-enter hero-delay-6 pt-14">
            <SignInButton mode="modal">
              <button className="group relative px-8 py-3 rounded-full text-xs tracking-[0.25em] uppercase text-slate-600 border border-slate-200/80 hover:border-orange-300/60 hover:text-orange-600 transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:outline-none">
                <span className="relative z-10">Commencer</span>
                <div className="absolute inset-0 rounded-full bg-orange-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </SignInButton>
          </div>
        )}
      </div>
    </section>
  );
};
