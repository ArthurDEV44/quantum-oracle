"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import {
  HomeHeroSection,
  ConsultFormSection,
  ConsultResultSection,
  HowItWorksSection,
} from "@/components";

interface ConsultationResult {
  question: string;
  response: string;
  quantumData: {
    numbers: number[];
    timestamp: string;
    source: string;
  };
}

export default function HomeClient() {
  const { isSignedIn, isLoaded } = useUser();
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState<ConsultationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
        throw new Error(data.error || "Erreur de traitement quantique");
      }

      setResult(data);
      setQuestion("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur mystérieuse est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-violet-900/30 border-t-violet-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-violet-500/30">
      <HomeHeroSection isSignedIn={isSignedIn} />

      <main className="pb-24">
        {isSignedIn && (
          <>
            <ConsultFormSection
              question={question}
              setQuestion={setQuestion}
              onSubmit={handleConsult}
              isLoading={isLoading}
            />

            {error && (
              <div className="max-w-2xl mx-auto px-4 mb-8">
                <div className="bg-red-900/20 border border-red-800/50 rounded-2xl p-4 text-red-400 text-center flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {error}
                </div>
              </div>
            )}

            {result && (
              <ConsultResultSection
                response={result.response}
                quantumData={result.quantumData}
              />
            )}
          </>
        )}

        <HowItWorksSection />
      </main>
    </div>
  );
}

