import { Metadata } from "next";
import { HistoryClient } from "@/components";

export const revalidate = 86400; // Revalidate every 24 hours

export const metadata: Metadata = {
  title: "Historique des Consultations | Quantum Oracle",
  description:
    "Retrouvez l'historique de vos questions posées à l'Oracle Quantique et les réponses générées par l'entropie de l'univers.",
  keywords: [
    "historique",
    "consultations",
    "oracle quantique",
    "réponses spirituelles",
    "physique quantique",
    "IA",
  ],
  openGraph: {
    title: "Historique des Consultations | Quantum Oracle",
    description:
      "Explorez vos anciennes interactions avec l'Oracle et redécouvrez la sagesse quantique.",
    type: "website",
    locale: "fr_FR",
    siteName: "Quantum Oracle",
  },
};

export default function HistoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Historique des Consultations - Quantum Oracle",
    description: "Archives des consultations de l'oracle quantique.",
    publisher: {
      "@type": "Organization",
      name: "Quantum Oracle",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HistoryClient />
    </>
  );
}
