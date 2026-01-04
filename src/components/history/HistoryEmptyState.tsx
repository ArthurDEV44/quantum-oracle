import Link from "next/link";

export const HistoryEmptyState = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <div className="bg-neutral-900/40 border border-neutral-800 rounded-3xl p-12 space-y-6 backdrop-blur-sm">
        <div className="w-20 h-20 bg-violet-900/20 rounded-full flex items-center justify-center mx-auto text-violet-400">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
          <h3 className="text-xl font-semibold text-white">Aucune consultation</h3>
          <p className="text-neutral-400 max-w-sm mx-auto">
            Votre historique est encore vierge. Posez votre première question à l&apos;Oracle pour commencer votre voyage.
          </p>
        </div>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-violet-600/10 hover:bg-violet-600/20 text-violet-400 border border-violet-600/30 rounded-full font-medium transition-all"
        >
          Consulter l&apos;Oracle
        </Link>
      </div>
    </div>
  );
};

