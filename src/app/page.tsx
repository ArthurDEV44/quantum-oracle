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
    <div className="min-h-[calc(100vh-73px)] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
            Quantum Oracle
          </h1>
          <p className="text-neutral-400 text-lg max-w-md mx-auto">
            Posez votre question et laissez l&apos;univers quantique vous
            guider. Chaque réponse est générée par un vrai générateur de nombres
            aléatoires quantiques.
          </p>
        </div>

        {!isLoaded ? (
          <div className="animate-pulse text-neutral-500">Chargement...</div>
        ) : !isSignedIn ? (
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-4">
            <p className="text-neutral-300">
              Connectez-vous pour consulter l&apos;Oracle Quantique
            </p>
            <p className="text-sm text-neutral-500">
              3 consultations gratuites par jour
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {usage && (
              <div className="flex justify-center">
                <div
                  className={`px-4 py-2 rounded-full text-sm ${
                    isLimitReached
                      ? "bg-red-900/30 border border-red-800 text-red-300"
                      : "bg-neutral-900 border border-neutral-800 text-neutral-400"
                  }`}
                >
                  {isLimitReached ? (
                    "Limite quotidienne atteinte"
                  ) : (
                    <>
                      <span className="text-violet-400 font-semibold">
                        {usage.remaining}
                      </span>{" "}
                      consultation{usage.remaining > 1 ? "s" : ""} restante
                      {usage.remaining > 1 ? "s" : ""} aujourd&apos;hui
                    </>
                  )}
                </div>
              </div>
            )}

            <form onSubmit={handleConsult} className="space-y-6">
              <div className="relative">
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Posez votre question à l'univers..."
                  className="w-full h-32 px-6 py-4 bg-neutral-900 border border-neutral-800 rounded-2xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none disabled:opacity-50"
                  disabled={isLoading || isLimitReached}
                  maxLength={500}
                />
                <span className="absolute bottom-3 right-3 text-xs text-neutral-600">
                  {question.length}/500
                </span>
              </div>

              <button
                type="submit"
                disabled={isLoading || !question.trim() || isLimitReached}
                className="w-full py-4 px-6 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 disabled:from-neutral-700 disabled:to-neutral-700 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:hover:scale-100"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Consultation en cours...
                  </span>
                ) : isLimitReached ? (
                  "Revenez demain"
                ) : (
                  "Consulter l'Oracle"
                )}
              </button>
            </form>
          </div>
        )}

        {error && (
          <div className="bg-red-900/30 border border-red-800 rounded-xl p-4 text-red-300">
            {error}
          </div>
        )}

        {result && (
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-sm text-neutral-500">Votre question</p>
              <p className="text-neutral-300 italic">
                &ldquo;{result.question}&rdquo;
              </p>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

            <div className="space-y-2">
              <p className="text-sm text-violet-400">Réponse de l&apos;Oracle</p>
              <p className="text-xl text-white font-medium leading-relaxed">
                {result.response}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <p className="text-xs text-neutral-600">
                Source: ANU Quantum Random Numbers | Données:{" "}
                {result.quantumData.numbers.slice(0, 4).join(", ")}...
              </p>
            </div>
          </div>
        )}

        <p className="text-xs text-neutral-600 max-w-md mx-auto">
          Ce service est fourni à des fins de divertissement et de réflexion
          personnelle. Les réponses ne constituent pas des conseils
          professionnels.
        </p>
      </div>
    </div>
  );
}
