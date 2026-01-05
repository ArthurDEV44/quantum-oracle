import Link from "next/link";

export const HistoryHeroSection = () => {
  return (
    <div className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-indigo-50 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
          Chroniques Quantiques
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto italic">
          Explorez les échos de vos consultations passées, gravées dans la trame de l&apos;espace-temps quantique.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-200"
          >
            <span>Nouvelle Consultation</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

