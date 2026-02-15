import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Navbar, Footer } from "@/components";
import { ToastProvider } from "@/components/ui/toast";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: {
    template: "%s | Quantum Oracle",
    default: "Quantum Oracle | La Sagesse de l'Entropie",
  },
  description:
    "Connectez vos décisions à l'incertitude fondamentale de l'univers. Réponses générées par un véritable générateur de nombres aléatoires quantiques.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Quantum Oracle",
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0C0C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="fr" className="dark">
        <body
          className={`${instrumentSerif.variable} ${inter.variable} ${geistMono.variable} bg-[#0C0C0C] text-[#E6E5E0] antialiased min-h-screen flex flex-col`}
          style={{ position: "relative" }}
        >
          <ToastProvider position="bottom-right">
            <div style={{ isolation: "isolate" }}>
              <Navbar />

              <main className="relative z-10 pt-20 flex-1">{children}</main>

              <Footer />
            </div>
          </ToastProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
