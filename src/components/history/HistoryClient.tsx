"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Cormorant_Garamond } from "next/font/google";
import {
  HistoryHeroSection,
  HistoryListSection,
  HistorySkeleton,
  HistoryEmptyState,
} from "@/components";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
});

interface Consultation {
  id: string;
  question: string;
  response: string;
  createdAt: string;
}

export default function HistoryClient() {
  const { isSignedIn, isLoaded } = useUser();
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      fetchHistory();
    } else if (isLoaded && !isSignedIn) {
      setIsLoading(false);
    }
  }, [isLoaded, isSignedIn]);

  const fetchHistory = async () => {
    try {
      const response = await fetch("/api/history");
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération de l'historique");
      }
      const data = await response.json();
      setConsultations(data.consultations);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Une erreur est survenue"
      );
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoaded || isLoading) {
    return (
      <div className="min-h-screen relative">
        <div className="mesh-gradient" aria-hidden="true" />
        <HistoryHeroSection />
        <HistorySkeleton />
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen relative flex flex-col items-center justify-center p-4">
        <div className="mesh-gradient" aria-hidden="true" />
        <div className="relative z-10 text-center space-y-6 max-w-md bg-white/50 backdrop-blur-xl border border-white/60 p-10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.03)]">
          <h1
            className={`${cormorant.className} text-3xl font-light text-slate-900`}
          >
            Historique
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed font-light">
            Veuillez vous connecter pour accéder à vos chroniques quantiques et
            retrouver la sagesse de l&apos;Oracle.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-slate-900 selection:bg-orange-300/30 relative">
      <div className="mesh-gradient" aria-hidden="true" />

      <HistoryHeroSection />

      <main className="pb-20 relative z-10">
        {error && (
          <div className="max-w-4xl mx-auto px-6 mb-8">
            <div className="bg-red-50/60 backdrop-blur-sm border border-red-200/40 rounded-2xl p-4 text-red-600 text-center text-sm flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {error}
            </div>
          </div>
        )}

        {consultations.length === 0 ? (
          <HistoryEmptyState />
        ) : (
          <HistoryListSection consultations={consultations} />
        )}
      </main>
    </div>
  );
}
