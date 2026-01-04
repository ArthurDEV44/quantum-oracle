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
    <section className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-3xl backdrop-blur-md shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-linear-to-br from-violet-600/5 to-transparent pointer-events-none" />
        
        <form onSubmit={onSubmit} className="space-y-6 relative z-10">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-400 ml-1 uppercase tracking-widest">
              Votre Question
            </label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ex: Quel chemin dois-je emprunter pour trouver la paix ?"
              className="w-full px-6 py-4 bg-black/50 border border-neutral-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none text-white placeholder:text-neutral-600 transition-all min-h-[120px]"
              disabled={isLoading}
              maxLength={500}
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading || !question.trim()}
            className="w-full group relative flex items-center justify-center gap-3 bg-violet-600 hover:bg-violet-500 text-white py-4 rounded-2xl font-bold text-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Interrogation des flux...</span>
              </>
            ) : (
              <>
                <span>Consulter l&apos;Oracle</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

