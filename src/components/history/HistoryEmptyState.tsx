import Link from "next/link";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

export const HistoryEmptyState = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <Empty>
        <EmptyHeader>
          <EmptyMedia
            variant="icon"
            className="text-[#D4A574]"
            style={{
              background:
                "radial-gradient(circle, rgba(212,165,116,0.08) 0%, transparent 70%)",
            }}
          >
            <svg
              className="size-5"
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
          </EmptyMedia>
          <EmptyTitle className="text-[#E6E5E0]">
            Aucune consultation
          </EmptyTitle>
          <EmptyDescription className="text-[#A49B8B]">
            Votre historique est encore vierge. Posez votre première question
            à l&apos;Oracle pour commencer.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button
            render={<Link href="/" />}
            size="lg"
            className="border-0 text-white shadow-[0_0_40px_rgba(212,165,116,0.15)] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0C0C]"
            style={{
              background: "var(--gradient-esoteric)",
            }}
          >
            Consulter l&apos;Oracle
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  );
};
