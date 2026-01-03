import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quantum Oracle",
  description:
    "Connectez vos décisions à l'incertitude fondamentale de l'univers. Réponses générées par un vrai générateur quantique.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Quantum Oracle",
  },
};

export const viewport: Viewport = {
  themeColor: "#7c3aed",
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
      <html lang="fr">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
        >
          <div className="film-grain" />
          <div className="volumetric-rays" />
          <header className="relative z-20 flex justify-between items-center p-8 bg-transparent">
            <Link
              href="/"
              className="text-xs uppercase tracking-[0.4em] font-light text-foreground/80 hover:text-gold transition-colors"
            >
              Quantum Oracle
            </Link>
            <nav className="flex gap-8 items-center">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-[10px] uppercase tracking-[0.3em] font-medium text-foreground/60 hover:text-foreground transition-colors">
                    Connexion
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-5 py-2 text-[10px] uppercase tracking-[0.3em] font-medium border border-foreground/10 hover:border-gold/50 transition-colors">
                    S&apos;inscrire
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link
                  href="/history"
                  className="text-[10px] uppercase tracking-[0.3em] font-medium text-foreground/60 hover:text-foreground transition-colors"
                >
                  Historique
                </Link>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8 rounded-none border border-foreground/20",
                    },
                  }}
                />
              </SignedIn>
            </nav>
          </header>
          <main className="relative z-10">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
