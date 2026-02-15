"use client";

import { useState, useEffect } from "react";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const MobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    // Track scroll position
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Track consult form visibility
    const form = document.getElementById("consult-form");
    if (form) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setFormVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(form);
      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", onScroll);
      };
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToConsult = () => {
    const element = document.getElementById("consult-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const shouldShow = visible && !formVisible;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden pb-6 px-4 transition-all duration-300 ${
        shouldShow ? "translate-y-0" : "translate-y-full"
      }`}
      style={{
        background:
          "linear-gradient(to top, rgba(12,12,12,0.98) 0%, rgba(12,12,12,0.95) 80%, transparent 100%)",
      }}
    >
      <SignedIn>
        <Button
          onClick={handleScrollToConsult}
          className="w-full rounded-2xl py-3.5 text-[15px] font-medium text-white hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
          style={{
            background:
              "linear-gradient(135deg, #4338CA 0%, #6D28D9 50%, #7C3AED 100%)",
            boxShadow: "var(--glow-violet)",
          }}
        >
          Consulter l&apos;Oracle
        </Button>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            className="w-full rounded-2xl py-3.5 text-[15px] font-medium text-white hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
            style={{
              background:
                "linear-gradient(135deg, #4338CA 0%, #6D28D9 50%, #7C3AED 100%)",
              boxShadow: "var(--glow-violet)",
            }}
          >
            Consulter l&apos;Oracle
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
};
