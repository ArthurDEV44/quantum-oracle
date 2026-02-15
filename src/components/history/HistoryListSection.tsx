import { Card, CardPanel } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
          <Card
            key={consultation.id}
            render={<article />}
            className="relative overflow-hidden hover:-translate-y-1 hover:border-white/[0.1] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-200"
          >
            <CardPanel>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 relative z-10">
                <div className="space-y-4 flex-1">
                  <div className="flex items-center gap-2 text-[#D4A574]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4A574]/60" />
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase">
                      Question
                    </span>
                  </div>
                  <p className="text-[#E6E5E0] text-base font-medium leading-relaxed">
                    &ldquo;{consultation.question}&rdquo;
                  </p>

                  <div
                    className="w-full h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(212,165,116,0.2), rgba(124,58,237,0.2), transparent)",
                    }}
                    aria-hidden="true"
                  />

                  <div className="flex items-center gap-2 text-[#A78BFA]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]/60" />
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase">
                      L&apos;Oracle a répondu
                    </span>
                  </div>
                  <p className="text-[#A49B8B] text-sm leading-relaxed">
                    {consultation.response}
                  </p>
                </div>

                <Badge
                  variant="outline"
                  className="self-start border-white/[0.08] bg-transparent text-[#8A857E] font-mono text-[10px] tracking-wide"
                >
                  {formatDate(consultation.createdAt)}
                </Badge>
              </div>
            </CardPanel>
          </Card>
        ))}
      </div>
    </div>
  );
};
