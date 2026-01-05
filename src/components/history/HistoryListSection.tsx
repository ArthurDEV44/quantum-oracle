interface Consultation {
  id: string;
  question: string;
  response: string;
  createdAt: string;
}

interface HistoryListSectionProps {
  consultations: Consultation[];
}

export const HistoryListSection = ({ consultations }: HistoryListSectionProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid gap-6">
        {consultations.map((consultation) => (
          <div
            key={consultation.id}
            className="group bg-white border border-slate-100 hover:border-indigo-100 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-50/50 relative overflow-hidden"
          >
            {/* Gradient accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-indigo-600/10 transition-colors" />
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 relative z-10">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2 text-indigo-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-semibold tracking-wider uppercase">Question</span>
                </div>
                <p className="text-slate-900 text-lg font-medium italic leading-relaxed">
                  &ldquo;{consultation.question}&rdquo;
                </p>
                
                <div className="w-full h-px bg-linear-to-r from-indigo-500/20 via-slate-100 to-transparent" />
                
                <div className="flex items-center gap-2 text-emerald-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-semibold tracking-wider uppercase">L&apos;Oracle a répondu</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {consultation.response}
                </p>
              </div>
              
              <div className="text-xs text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full self-start border border-slate-100">
                {formatDate(consultation.createdAt)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

