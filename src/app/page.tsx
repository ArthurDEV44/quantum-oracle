"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";

interface ConsultationResult {
  question: string;
  response: string;
  quantumData: {
    numbers: number[];
    timestamp: string;
    source: string;
  };
  remaining?: number;
}

interface UsageStatus {
  remaining: number;
  used: number;
  limit: number;
}

export default function Home() {
  const { isSignedIn, isLoaded } = useUser();
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState<ConsultationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [usage, setUsage] = useState<UsageStatus | null>(null);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      fetchUsage();
    }
  }, [isLoaded, isSignedIn]);

  const fetchUsage = async () => {
    try {
      const response = await fetch("/api/usage");
      if (response.ok) {
        const data = await response.json();
        setUsage(data);
      }
    } catch {
      // Silent fail
    }
  };

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!question.trim()) return;

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch("/api/consult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de la consultation");
      }

      setResult(data);
      if (typeof data.remaining === "number") {
        setUsage((prev) =>
          prev ? { ...prev, remaining: data.remaining, used: prev.used + 1 } : null
        );
      }
      setQuestion("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  const isLimitReached = usage?.remaining === 0;

  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center p-8 relative">
      {/* Centerpiece: Floating Qubit Sphere */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 opacity-50 md:opacity-100">
        <div className="relative">
          {/* Main Sphere */}
          <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full animate-float shadow-[0_0_80px_rgba(255,255,255,0.4)] relative overflow-hidden">
            {/* Texture/Glow on Sphere */}
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-white/50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,1),transparent_70%)]" />
          </div>
          
          {/* Gold Interference Patterns (Thin lines) */}
          <div className="absolute inset-0 flex items-center justify-center animate-golden-glow">
            <div className="w-[120%] h-px bg-gold/30 rotate-12 blur-[1px]" />
            <div className="w-[120%] h-px bg-gold/20 -rotate-45 blur-[1px] delay-700" />
            <div className="absolute w-[150%] h-[150%] rounded-full border border-gold/10 scale-90" />
            <div className="absolute w-[180%] h-[180%] rounded-full border border-gold/5 scale-110" />
          </div>
          
          {/* Divine Light Rays (CSS) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gold/5 blur-[80px] rounded-full" />
        </div>
      </div>

      <div className="w-full max-w-2xl mx-auto text-center space-y-24 relative z-10 bg-background/40 backdrop-blur-sm p-12 rounded-3xl">
        <div className="space-y-6">
          <h1 className="text-sm md:text-base font-medium uppercase tracking-[1em] text-foreground animate-fade-in">
            Quantum Oracle
          </h1>
          <div className="w-12 h-px bg-gold mx-auto animate-fade-in" />
        </div>

        <div className="space-y-12">
          {!isLoaded ? (
            <div className="text-[10px] uppercase tracking-[0.5em] text-foreground/50 animate-pulse">
              Initialisation des fréquences...
            </div>
          ) : !isSignedIn ? (
            <div className="space-y-8 animate-fade-in">
              <p className="text-[10px] uppercase tracking-[0.4em] text-foreground leading-relaxed max-w-xs mx-auto">
                Accédez à l&apos;incertitude primordiale. Trois consultations solaires par jour.
              </p>
              <div className="w-px h-16 bg-linear-to-b from-gold to-transparent mx-auto" />
            </div>
          ) : (
            <div className="space-y-12 animate-fade-in">
              {usage && (
                <div className="flex justify-center">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 font-medium">
                    {isLimitReached ? (
                      <span className="text-red-600">Cycle quotidien épuisé</span>
                    ) : (
                      <>
                        Fréquence : <span className="text-gold-700 font-bold">{usage.remaining}</span> consultation{usage.remaining > 1 ? "s" : ""} disponible{usage.remaining > 1 ? "s" : ""}
                      </>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleConsult} className="space-y-12">
                <div className="relative group">
                  <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Posez votre question à l'univers..."
                    className="w-full bg-transparent border-b border-foreground/30 py-4 px-0 text-center text-xl font-light text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold transition-colors resize-none disabled:opacity-30"
                    disabled={isLoading || isLimitReached}
                    maxLength={500}
                  />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold to-transparent opacity-0 group-focus-within:opacity-100 transition-all duration-1000" />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-widest text-foreground/40">
                    {question.length}/500
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isLoading || !question.trim() || isLimitReached}
                  className="group relative px-12 py-4 overflow-hidden disabled:opacity-20 transition-opacity"
                >
                  <div className="absolute inset-0 border border-foreground/40 group-hover:border-gold transition-colors" />
                  <span className="relative text-[11px] uppercase tracking-[0.6em] font-bold text-foreground group-hover:text-gold-700 transition-colors">
                    {isLoading ? "Vibration en cours..." : isLimitReached ? "Attendre l'aube" : "Invoquer l'Oracle"}
                  </span>
                  {/* Subtle hover effect */}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                </button>
              </form>
            </div>
          )}
        </div>

        {error && (
          <div className="text-[11px] uppercase tracking-[0.2em] text-red-600 font-medium animate-fade-in">
            Interférence : {error}
          </div>
        )}

        {result && (
          <div className="space-y-12 animate-fade-in pt-12">
            <div className="w-px h-16 bg-linear-to-b from-transparent via-gold to-transparent mx-auto" />
            
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50 font-medium">L&apos;Oracle a parlé</p>
              <p className="text-2xl md:text-4xl font-light text-foreground leading-relaxed italic">
                &ldquo;{result.response}&rdquo;
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex justify-center items-center gap-8">
                <div className="w-8 h-px bg-gold/40" />
                <p className="text-[9px] uppercase tracking-[0.5em] text-foreground/40 font-bold">
                  Signature Quantique
                </p>
                <div className="w-8 h-px bg-gold/40" />
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-[9px] font-mono tracking-widest text-foreground/60">
                {result.quantumData.numbers.slice(0, 6).map((n, i) => (
                  <span key={i} className="px-2 py-1 border border-foreground/20 bg-background/50">{n}</span>
                ))}
              </div>
            </div>
          </div>
        )}

        <footer className="pt-24 space-y-4">
          <div className="w-px h-8 bg-foreground/20 mx-auto" />
          <p className="text-[10px] uppercase tracking-[0.4em] text-foreground/50 max-w-xs mx-auto leading-loose font-medium">
            Exploration métaphysique par résonance subatomique.
            Divertissement et réflexion.
          </p>
        </footer>
      </div>
    </div>
  );
}
