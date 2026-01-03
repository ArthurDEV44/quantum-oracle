"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

interface Consultation {
  id: string;
  question: string;
  response: string;
  createdAt: string;
}

export default function HistoryPage() {
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
        throw new Error("Erreur lors de la récupération");
      }
      const data = await response.json();
      setConsultations(data.consultations);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  if (!isLoaded || isLoading) {
    return (
      <div className="min-h-[calc(100vh-73px)] flex items-center justify-center">
        <div className="animate-pulse text-neutral-500">Chargement...</div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-[calc(100vh-73px)] flex flex-col items-center justify-center p-4">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-white">Historique</h1>
          <p className="text-neutral-400">
            Connectez-vous pour voir votre historique de consultations
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-73px)] p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">
            Historique des consultations
          </h1>
          <Link
            href="/"
            className="px-4 py-2 text-sm bg-violet-600 hover:bg-violet-500 rounded-lg transition-colors"
          >
            Nouvelle consultation
          </Link>
        </div>

        {error && (
          <div className="bg-red-900/30 border border-red-800 rounded-xl p-4 text-red-300">
            {error}
          </div>
        )}

        {consultations.length === 0 ? (
          <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 text-center">
            <p className="text-neutral-400">
              Aucune consultation pour le moment
            </p>
            <Link
              href="/"
              className="inline-block mt-4 text-violet-400 hover:text-violet-300"
            >
              Poser votre première question
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {consultations.map((consultation) => (
              <div
                key={consultation.id}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 space-y-4 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-neutral-300 italic flex-1">
                    &ldquo;{consultation.question}&rdquo;
                  </p>
                  <span className="text-xs text-neutral-600 whitespace-nowrap">
                    {formatDate(consultation.createdAt)}
                  </span>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

                <p className="text-white">{consultation.response}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
