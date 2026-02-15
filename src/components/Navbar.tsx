"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const ctaGradientStyle = {
  background:
    "linear-gradient(135deg, #4338CA 0%, #6D28D9 50%, #7C3AED 100%)",
  boxShadow: "0 0 40px rgba(124, 58, 237, 0.15)",
};

export const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowCTA(window.scrollY > 600);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToConsult = () => {
    const element = document.getElementById("consult-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Frosted glass backdrop - dark mode, revealed on scroll */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(12, 12, 12, 0.72)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold text-[#E6E5E0] tracking-tight hover:text-[#A49B8B] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0C0C0C] rounded-sm"
        >
          Quantum Oracle
        </Link>

        <nav className="flex items-center gap-6">
          {/* Sticky CTA - appears after scrolling past hero */}
          <div
            className={`transition-all duration-300 ${
              showCTA
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-1 pointer-events-none"
            }`}
          >
            <SignedIn>
              <Button
                onClick={handleScrollToConsult}
                className="rounded-full px-4 py-1.5 text-[13px] font-medium text-white border-transparent hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
                style={ctaGradientStyle}
              >
                Consulter
              </Button>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  className="rounded-full px-4 py-1.5 text-[13px] font-medium text-white border-transparent hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
                  style={ctaGradientStyle}
                >
                  Consulter
                </Button>
              </SignInButton>
            </SignedOut>
          </div>

          <SignedIn>
            {/* Navigation link */}
            <Link
              href="/history"
              className={`text-[13px] font-medium transition-colors duration-150 hover:text-[#E6E5E0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0C0C0C] rounded-sm ${
                pathname === "/history" ? "text-[#E6E5E0]" : "text-[#A49B8B]"
              }`}
            >
              Chroniques
            </Link>

            {/* Divider */}
            <div className="w-px h-4 bg-white/[0.06]" aria-hidden="true" />

            {/* Clerk UserButton - dark mode appearance */}
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "w-8 h-8 rounded-full border border-white/[0.06] overflow-hidden",
                  userButtonPopoverCard: "bg-[#1C1C1F] border-white/[0.08]",
                  userButtonPopoverActionButton:
                    "text-[#E6E5E0] hover:bg-white/[0.06]",
                  userButtonPopoverActionButtonText: "text-[#E6E5E0]",
                  userButtonPopoverActionButtonIcon: "text-[#A49B8B]",
                  userButtonPopoverFooter: "hidden",
                },
              }}
            />
          </SignedIn>

          <SignedOut>
            {/* Sign in - ghost button */}
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                className="text-[13px] font-medium text-[#A49B8B] hover:text-[#E6E5E0] hover:bg-transparent transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
              >
                Connexion
              </Button>
            </SignInButton>

            {/* Sign up - gradient CTA */}
            <SignUpButton mode="modal">
              <Button
                className="rounded-full px-5 py-2.5 text-[13px] font-medium text-white border-transparent hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
                style={ctaGradientStyle}
              >
                Rejoindre
              </Button>
            </SignUpButton>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
};
