import { Metadata } from "next";
import { HomeClient } from "@/components";

export const revalidate = 86400; // Revalidate every 24 hours

export const metadata: Metadata = {
  title: "Quantum Oracle | Sagesse de l'Entropie Quantique",
  description:
    "Posez vos questions à l'Oracle Quantique. Recevez des réponses mystiques générées à partir de véritables fluctuations quantiques mesurées en temps réel.",
  keywords: [
    "oracle",
    "quantique",
    "QRNG",
    "spiritualité",
    "intelligence artificielle",
    "entropie",
    "voyance",
  ],
  openGraph: {
    title: "Quantum Oracle | Sagesse de l'Entropie Quantique",
    description:
      "Explorez le futur et le présent à travers le prisme de la physique quantique.",
    type: "website",
    locale: "fr_FR",
    siteName: "Quantum Oracle",
    images: [
      {
        url: "/og-image.png", // Assume there might be one or plan to add it
        width: 1200,
        height: 630,
        alt: "Quantum Oracle",
      },
    ],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Quantum Oracle",
    description:
      "Une application web utilisant des nombres aléatoires quantiques pour générer des interprétations mystiques.",
    applicationCategory: "LifestyleApplication",
    genre: "Spirituality",
    browserRequirements: "Requires JavaScript",
    softwareVersion: "1.0.0",
    operatingSystem: "All",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
