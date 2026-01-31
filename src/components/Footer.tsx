export const Footer = () => {
  return (
    <footer className="relative z-10 py-16 mt-auto">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Decorative divider */}
        <div
          className="flex items-center justify-center gap-3 mb-10"
          aria-hidden="true"
        >
          <div className="w-8 h-px bg-orange-200/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-violet-300/50" />
          <div className="w-8 h-px bg-blue-200/40" />
        </div>

        <p className="text-slate-500 text-[11px] tracking-[0.3em] uppercase font-mono">
          Propulsé par l&apos;entropie quantique
        </p>

        {/* Providers */}
        <div className="flex justify-center items-center gap-3 mt-5 text-slate-300/80 text-[10px] font-mono tracking-[0.2em]">
          <span>LFD</span>
          <span className="text-slate-200" aria-hidden="true">
            ·
          </span>
          <span>NIST</span>
          <span className="text-slate-200" aria-hidden="true">
            ·
          </span>
          <span>WEB CRYPTO</span>
        </div>

        <div className="mt-8 text-slate-300/60 text-[10px] tracking-[0.2em] font-light">
          &copy; {new Date().getFullYear()} Quantum Oracle
        </div>
      </div>
    </footer>
  );
};
