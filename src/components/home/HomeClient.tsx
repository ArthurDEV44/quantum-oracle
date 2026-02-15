"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import {
  HomeHeroSection,
  ConsultFormSection,
  ConsultResultSection,
  HowItWorksSection,
} from "@/components";
import { SkeletonLoader } from "@/components/home/SkeletonLoader";
import { MobileCTA } from "@/components/home/MobileCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { toastManager } from "@/components/ui/toast";
import type { EsotericReading } from "@/types/esoteric";

interface ConsultationResult {
  question: string;
  response: string;
  quantumData: {
    numbers: number[];
    timestamp: string;
    source: string;
    energy?: number;
    category?: string;
  };
  esotericReading?: EsotericReading;
}

export default function HomeClient() {
  const { isSignedIn, isLoaded } = useUser();
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState<ConsultationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!question.trim()) return;

    setIsLoading(true);
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
      toastManager.add({
        title: "Consultation terminée",
        description: "Les flux quantiques ont été interprétés avec succès.",
        type: "success",
      });
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Une erreur mystérieuse est survenue";
      toastManager.add({
        title: "Erreur de consultation",
        description: message,
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div
          className="w-8 h-8 rounded-full border-2 border-transparent animate-spin"
          style={{
            borderTopColor: "#4338CA",
            borderRightColor: "rgba(67, 56, 202, 0.3)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Ambient background */}
      <div className="mesh-gradient" aria-hidden="true" />

      <HomeHeroSection isSignedIn={isSignedIn} />

      <main className="pb-32">
        {isSignedIn && (
          <>
            <ScrollReveal>
              <ConsultFormSection
                question={question}
                setQuestion={setQuestion}
                onSubmit={handleConsult}
                isLoading={isLoading}
              />
            </ScrollReveal>

            {isLoading && <SkeletonLoader />}

            {result && (
              <ScrollReveal>
                <ConsultResultSection
                  response={result.response}
                  quantumData={result.quantumData}
                  esotericReading={result.esotericReading}
                />
              </ScrollReveal>
            )}
          </>
        )}

        <ScrollReveal>
          <HowItWorksSection />
        </ScrollReveal>
      </main>

      <MobileCTA />
    </div>
  );
}
