export const Footer = () => {
  return (
    <footer className="relative z-10 py-12 mt-auto border-t border-slate-100 bg-white/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        <p className="text-slate-500 text-sm tracking-widest uppercase font-medium">
          Propulsé par des générateurs de nombres aléatoires quantiques
        </p>
        <div className="flex justify-center gap-8 text-slate-400 text-[10px] font-mono tracking-widest">
          <span className="hover:text-indigo-500 transition-colors cursor-default">LFH</span>
          <span className="hover:text-blue-500 transition-colors cursor-default">NIST BEACON</span>
          <span className="hover:text-emerald-500 transition-colors cursor-default">WEB CRYPTO</span>
        </div>
        <div className="pt-4 text-slate-300 text-[10px] uppercase tracking-widest font-light">
          &copy; {new Date().getFullYear()} Quantum Oracle &bull; Échos de l&apos;Infini
        </div>
      </div>
    </footer>
  );
};

