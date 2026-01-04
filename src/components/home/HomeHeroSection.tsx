import { SignInButton } from "@clerk/nextjs";

interface HomeHeroSectionProps {
  isSignedIn: boolean;
}

export const HomeHeroSection = ({ isSignedIn }: HomeHeroSectionProps) => {
  return (
    <div className="relative py-20 overflow-hidden text-center">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-violet-900/20 via-black to-black pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-violet-600/10 blur-3xl rounded-full -z-10" />

      <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
          L&apos;Oracle <span className="text-violet-500">Quantique</span>
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Obtenez des réponses uniques générées par l&apos;entropie pure de l&apos;univers. 
          Une fusion entre sagesse ancestrale et physique quantique réelle.
        </p>

        {!isSignedIn && (
          <div className="pt-8">
            <SignInButton mode="modal">
              <button className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/5">
                Commencer le voyage
              </button>
            </SignInButton>
          </div>
        )}
      </div>
    </div>
  );
};

