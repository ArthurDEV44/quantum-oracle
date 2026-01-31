interface Consultation {
  id: string;
  question: string;
  response: string;
  createdAt: string;
}

interface HistoryListSectionProps {
  consultations: Consultation[];
}

export const HistoryListSection = ({
  consultations,
}: HistoryListSectionProps) => {
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
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="grid gap-5">
        {consultations.map((consultation) => (
          <article
            key={consultation.id}
            className="bg-white/40 backdrop-blur-sm border border-slate-100 rounded-2xl p-7 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 relative z-10">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-2 text-orange-500/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400/60" />
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase">
                    Question
                  </span>
                </div>
                <p className="text-slate-900 text-base font-medium leading-relaxed">
                  &ldquo;{consultation.question}&rdquo;
                </p>

                <div
                  className="w-full h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, hsla(28, 90%, 60%, 0.2), hsla(270, 70%, 60%, 0.15), transparent)",
                  }}
                  aria-hidden="true"
                />

                <div className="flex items-center gap-2 text-violet-500/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400/60" />
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase">
                    L&apos;Oracle a répondu
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {consultation.response}
                </p>
              </div>

              <div className="text-[10px] text-slate-400 font-mono tracking-wide bg-white/60 px-3 py-1.5 rounded-full self-start border border-slate-100/60">
                {formatDate(consultation.createdAt)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
