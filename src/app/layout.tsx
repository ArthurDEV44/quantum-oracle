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
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-white`}
        >
          <header className="flex justify-between items-center p-4 border-b border-neutral-800">
            <Link
              href="/"
              className="text-lg font-semibold text-violet-400 hover:text-violet-300 transition-colors"
            >
              Quantum Oracle
            </Link>
            <nav className="flex gap-4 items-center">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-4 py-2 text-sm text-neutral-300 hover:text-white transition-colors">
                    Connexion
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-4 py-2 text-sm bg-violet-600 hover:bg-violet-500 rounded-lg transition-colors">
                    S&apos;inscrire
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link
                  href="/history"
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  Historique
                </Link>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10",
                    },
                  }}
                />
              </SignedIn>
            </nav>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
