"use client";

import Link from "next/link";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FOOTER_LINKS = {
  Produit: [
    { label: "Consulter", href: "/" },
    { label: "Comment ça marche", href: "/#how-it-works" },
    { label: "Chroniques", href: "/history" },
  ],
  Technologie: [
    { label: "QRNG", href: "#" },
    { label: "Traditions", href: "#" },
    { label: "API", href: "#" },
  ],
  Légal: [
    { label: "Mentions légales", href: "#" },
    { label: "Confidentialité", href: "#" },
    { label: "CGU", href: "#" },
  ],
};

const ctaButtonClass =
  "rounded-full px-8 py-3.5 text-[15px] font-medium text-white border-none shadow-[0_4px_16px_rgba(67,56,202,0.3)] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]";
const ctaButtonStyle = {
  background:
    "linear-gradient(135deg, #4338CA 0%, #6D28D9 50%, #7C3AED 100%)",
};

export const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.06] relative z-10">
      {/* CTA Zone */}
      <div className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-normal italic tracking-tight text-[#E6E5E0]">
            Prêt à interroger l&apos;Oracle ?
          </h2>
          <p className="text-[#A49B8B] text-[15px] mt-4">
            Laissez l&apos;entropie quantique guider votre lecture
          </p>
          <div className="mt-8">
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  className={ctaButtonClass}
                  style={ctaButtonStyle}
                >
                  Consulter l&apos;Oracle
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button
                onClick={() => {
                  document
                    .getElementById("consult-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={ctaButtonClass}
                style={ctaButtonStyle}
              >
                Consulter l&apos;Oracle
              </Button>
            </SignedIn>
          </div>
          <p className="text-[#8A857E] text-[13px] mt-4">
            Gratuit · Sans engagement
          </p>
        </div>
      </div>

      {/* Separator between CTA and Links */}
      <div className="max-w-5xl mx-auto px-6">
        <Separator className="bg-white/[0.06]" />
      </div>

      {/* Links Zone */}
      <div className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-[13px] font-semibold tracking-wide uppercase text-[#E6E5E0] mb-4">
                  {category}
                </h3>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-[#8A857E] hover:text-[#A49B8B] transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="mt-10 pt-6 text-center">
            <p className="text-[11px] text-[#8A857E]">
              &copy; {new Date().getFullYear()} Quantum Oracle. Tous droits
              réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
