"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import {
  HistoryHeroSection,
  HistoryListSection,
  HistorySkeleton,
  HistoryEmptyState,
} from "@/components";

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
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoaded || isLoading) {
    return (
      <div className="min-h-screen bg-black">
        <HistoryHeroSection />
        <HistorySkeleton />
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-md bg-neutral-900/50 border border-neutral-800 p-8 rounded-3xl backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-white">Historique</h1>
          <p className="text-neutral-400">
            Veuillez vous connecter pour accéder à vos chroniques quantiques et retrouver la sagesse de l&apos;Oracle.
          </p>
          <div className="pt-4">
            {/* Clerk Sign In logic should ideally be here if not handled by middleware */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-violet-500/30">
      <HistoryHeroSection />
      
      <main className="pb-20">
        {error && (
          <div className="max-w-4xl mx-auto px-4 mb-8">
            <div className="bg-red-900/20 border border-red-800/50 rounded-2xl p-4 text-red-400 text-center flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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

