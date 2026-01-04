"use client";

import Link from "next/link";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border-b border-white/5" />
      
      <div className="relative max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform hover:scale-105"
        >
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-900/20 group-hover:shadow-violet-600/40 transition-all">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/90 group-hover:text-white transition-colors">
            Quantum Oracle
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          <SignedIn>
            <Link
              href="/history"
              className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-all hover:text-violet-400 ${
                pathname === "/history"
                  ? "text-violet-400"
                  : "text-neutral-400"
              }`}
            >
              Chroniques
            </Link>
            
            <div className="w-px h-4 bg-neutral-800" />
            
            <UserButton
              appearance={{
                elements: {
                  rootBox: "hover:scale-105 transition-transform",
                  avatarBox: "w-9 h-9 rounded-xl border border-white/10 overflow-hidden shadow-inner",
                },
              }}
            />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-400 hover:text-white transition-colors cursor-pointer">
                Connexion
              </button>
            </SignInButton>
            
            <SignUpButton mode="modal">
              <button className="px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-bold bg-white text-black rounded-full hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/5 cursor-pointer">
                Rejoindre
              </button>
            </SignUpButton>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
};

