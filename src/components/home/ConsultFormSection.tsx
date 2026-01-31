interface ConsultFormSectionProps {
  question: string;
  setQuestion: (val: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
}

export const ConsultFormSection = ({
  question,
  setQuestion,
  onSubmit,
  isLoading,
}: ConsultFormSectionProps) => {
  return (
    <section className="max-w-2xl mx-auto px-6 py-12">
      <div className="bg-white/50 backdrop-blur-xl border border-white/60 p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.03)] relative overflow-hidden">
        <form onSubmit={onSubmit} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <label
              htmlFor="oracle-question"
              className="text-[11px] text-slate-500 ml-1 uppercase tracking-[0.2em] font-mono"
            >
              Votre Question
            </label>
            <textarea
              id="oracle-question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ex: Quel chemin dois-je emprunter pour trouver la paix ?"
              className="w-full px-6 py-4 bg-white/60 border border-slate-200/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-transparent resize-none text-slate-900 placeholder:text-slate-400 transition-shadow duration-200 min-h-[120px]"
              disabled={isLoading}
              maxLength={500}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading || !question.trim()}
            className="w-full group relative flex items-center justify-center gap-3 text-white py-4 rounded-xl font-semibold text-base transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2"
            style={{
              background:
                "linear-gradient(135deg, #f97316 0%, #a855f7 60%, #3b82f6 100%)",
            }}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Interrogation des flux…</span>
              </>
            ) : (
              <>
                <span>Consulter l&apos;Oracle</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
