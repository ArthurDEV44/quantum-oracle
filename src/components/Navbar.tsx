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
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-black/5" />
      
      <div className="relative max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link
          href="/"
          className="group flex items-center gap-3 transition-transform hover:scale-105"
        >
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-200/50 group-hover:shadow-indigo-600/20 transition-all">
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
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-slate-900/90 group-hover:text-black transition-colors">
            Quantum Oracle
          </span>
        </Link>

        <nav className="flex items-center gap-8">
          <SignedIn>
            <Link
              href="/history"
              className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-all hover:text-indigo-600 ${
                pathname === "/history"
                  ? "text-indigo-600"
                  : "text-slate-500"
              }`}
            >
              Chroniques
            </Link>
            
            <div className="w-px h-4 bg-slate-200" />
            
            <UserButton
              appearance={{
                elements: {
                  rootBox: "hover:scale-105 transition-transform",
                  avatarBox: "w-9 h-9 rounded-xl border border-black/10 overflow-hidden shadow-sm",
                },
              }}
            />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer">
                Connexion
              </button>
            </SignInButton>
            
            <SignUpButton mode="modal">
              <button className="px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] font-bold bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10 cursor-pointer">
                Rejoindre
              </button>
            </SignUpButton>
          </SignedOut>
        </nav>
      </div>
    </header>
  );
};

