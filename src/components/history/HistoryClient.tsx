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
        <div className="relative z-10 text-center space-y-6 max-w-md rounded-2xl bg-white border border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.06)] p-10">
          <h1 className="text-3xl font-normal text-[#18181B] tracking-tight">
            Historique
          </h1>
          <p className="text-[#71717A] text-sm leading-relaxed">
            Veuillez vous connecter pour accéder à vos chroniques quantiques et
            retrouver la sagesse de l&apos;Oracle.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <div className="mesh-gradient" aria-hidden="true" />

      <HistoryHeroSection />

      <main className="pb-20 relative z-10">
        {error && (
          <div className="max-w-4xl mx-auto px-6 mb-8">
            <div className="rounded-2xl bg-white border border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.06)] p-4 text-center flex items-center justify-center gap-2.5">
              <svg
                className="w-4 h-4 text-red-500 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm text-[#18181B]">{error}</span>
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
