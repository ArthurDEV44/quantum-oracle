"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Liquid glass backdrop - revealed on scroll */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(255, 253, 250, 0.4)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link
          href="/"
          className={`${cormorant.className} text-2xl font-light text-slate-900 tracking-tight hover:text-slate-600 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-300 focus-visible:ring-offset-4 rounded-sm`}
        >
          Quantum Oracle
        </Link>

        <nav className="flex items-center gap-6">
          <SignedIn>
            <Link
              href="/history"
              className={`text-[11px] uppercase tracking-[0.2em] font-mono transition-colors duration-200 hover:text-orange-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-300 focus-visible:ring-offset-4 rounded-sm ${
                pathname === "/history"
                  ? "text-orange-600"
                  : "text-slate-500"
              }`}
            >
              Chroniques
            </Link>

            <div className="w-px h-4 bg-slate-200/60" aria-hidden="true" />

            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "w-8 h-8 rounded-full border border-black/[0.06] overflow-hidden",
                },
              }}
            />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-[11px] uppercase tracking-[0.2em] font-mono text-slate-500 hover:text-orange-600 transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-300 focus-visible:ring-offset-4 rounded-sm">
                Connexion
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button
                className="px-5 py-2 text-[11px] uppercase tracking-[0.2em] font-mono text-white rounded-full hover:opacity-90 transition-opacity duration-200 active:scale-95 shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2"
                style={{
                  background:
                    "linear-gradient(135deg, #f97316 0%, #a855f7 100%)",
                }}
              >
                Rejoindre
              </button>
            </SignUpButton>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
};
