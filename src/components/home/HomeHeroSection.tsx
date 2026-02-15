import { SignInButton } from "@clerk/nextjs";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface HomeHeroSectionProps {
  isSignedIn?: boolean;
}

export const HomeHeroSection = ({ isSignedIn }: HomeHeroSectionProps) => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative py-20 md:py-36 lg:py-48 overflow-hidden text-center">
      {/* Ambient gold glow behind title */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 30%, rgba(212,165,116,0.06) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 60% 20%, rgba(124,58,237,0.04) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Overline */}
        <div className="hero-enter hero-delay-1 mb-8">
          <span className="inline-flex items-center gap-2 text-sm text-[#D4A574] tracking-wide">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{
                background:
                  "linear-gradient(135deg, #D4A574, #C9A87C)",
              }}
              aria-hidden="true"
            />
            Entropie quantique
          </span>
        </div>

        {/* Title — Instrument Serif italic via CSS rule */}
        <h1>
          <span className="hero-enter hero-delay-2 block text-4xl sm:text-5xl md:text-[7rem] lg:text-[9rem] font-normal tracking-[-0.04em] text-[#E6E5E0] leading-[0.9]">
            L&apos;Oracle
          </span>
          <span className="hero-enter hero-delay-3 block text-3xl sm:text-4xl md:text-[6rem] lg:text-[8rem] font-normal tracking-[-0.03em] mt-1 md:mt-2 text-gradient leading-[0.9]">
            Quantique
          </span>
        </h1>

        {/* Spacer */}
        <div
          className="hero-enter hero-delay-4 h-8 md:h-12"
          aria-hidden="true"
        />

        {/* Subtitle */}
        <p className="hero-enter hero-delay-5 text-[#A49B8B] text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed font-light tracking-tight">
          Reponses uniques nees du hasard fondamental de l&apos;univers.
          <span className="block mt-2 text-sm sm:text-base md:text-lg lg:text-xl text-[#8A857E]">
            Sagesse ancestrale. Physique quantique. Reunies.
          </span>
        </p>

        {/* Dual CTAs */}
        <div className="hero-enter hero-delay-6 pt-12 flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* Primary CTA - Consulter l'Oracle */}
            {isSignedIn ? (
              <Button
                size="xl"
                onClick={() => handleScrollTo("consult-form")}
                className="rounded-full px-10 border-none text-[15px] text-white hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
                style={{
                  background:
                    "linear-gradient(135deg, #4338CA 0%, #6D28D9 50%, #7C3AED 100%)",
                  boxShadow: "0 0 40px rgba(124, 58, 237, 0.15)",
                }}
              >
                Consulter l&apos;Oracle
              </Button>
            ) : (
              <SignInButton mode="modal">
                <Button
                  size="xl"
                  className="rounded-full px-10 border-none text-[15px] text-white hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
                  style={{
                    background:
                      "linear-gradient(135deg, #4338CA 0%, #6D28D9 50%, #7C3AED 100%)",
                    boxShadow: "0 0 40px rgba(124, 58, 237, 0.15)",
                  }}
                >
                  Consulter l&apos;Oracle
                </Button>
              </SignInButton>
            )}

            {/* Secondary CTA - Comment ca marche */}
            <Button
              size="xl"
              variant="outline"
              onClick={() => handleScrollTo("how-it-works")}
              className="rounded-full px-10 text-[15px] text-[#A49B8B] border-white/[0.12] bg-transparent hover:bg-white/[0.04] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
            >
              Comment ca marche
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <Badge
              variant="outline"
              className="rounded-full border-white/[0.08] bg-transparent text-[#8A857E] text-[12px]"
            >
              QRNG Hannover
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full border-white/[0.08] bg-transparent text-[#8A857E] text-[12px]"
            >
              Mistral AI
            </Badge>
            <Badge
              variant="outline"
              className="rounded-full border-white/[0.08] bg-transparent text-[#8A857E] text-[12px]"
            >
              6+ Traditions
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
