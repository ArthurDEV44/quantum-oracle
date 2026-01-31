import Link from "next/link";

export const HistoryEmptyState = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <div className="bg-white/40 backdrop-blur-sm border border-slate-100 rounded-2xl p-12 space-y-6">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto text-orange-400/70"
          style={{
            background:
              "radial-gradient(circle, hsla(28, 100%, 72%, 0.1) 0%, transparent 70%)",
          }}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="space-y-2">
          <h3 className="text-slate-800 text-base font-medium">
            Aucune consultation
          </h3>
          <p className="text-slate-500 text-sm max-w-xs mx-auto font-light leading-relaxed">
            Votre historique est encore vierge. Posez votre première question à
            l&apos;Oracle pour commencer.
          </p>
        </div>
        <Link
          href="/"
          className="inline-block px-7 py-2.5 text-[11px] uppercase tracking-[0.2em] font-mono text-white rounded-full hover:opacity-90 transition-opacity duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2"
          style={{
            background:
              "linear-gradient(135deg, #f97316 0%, #a855f7 100%)",
          }}
        >
          Consulter l&apos;Oracle
        </Link>
      </div>
    </div>
  );
};
