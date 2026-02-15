import { Card, CardPanel } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const HistorySkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="grid gap-5">
        {[1, 2, 3].map((i) => (
          <Card key={i} render={<div />} className="relative overflow-hidden">
            <CardPanel>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-4 flex-1">
                  {/* Question label */}
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-1.5 h-1.5 rounded-full bg-[#1A1A1D]" />
                    <Skeleton className="h-2.5 w-16 rounded-full bg-[#1A1A1D]" />
                  </div>

                  {/* Question text */}
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full rounded-full bg-[#1A1A1D]" />
                    <Skeleton className="h-4 w-4/5 rounded-full bg-[#1A1A1D]" />
                  </div>

                  {/* Gradient divider placeholder */}
                  <Skeleton className="h-px w-full rounded-full bg-[#1A1A1D]" />

                  {/* Oracle label */}
                  <div className="flex items-center gap-2">
                    <Skeleton className="w-1.5 h-1.5 rounded-full bg-[#1A1A1D]" />
                    <Skeleton className="h-2.5 w-28 rounded-full bg-[#1A1A1D]" />
                  </div>

                  {/* Response text */}
                  <div className="space-y-2">
                    <Skeleton className="h-3.5 w-full rounded-full bg-[#1A1A1D]" />
                    <Skeleton className="h-3.5 w-5/6 rounded-full bg-[#1A1A1D]" />
                    <Skeleton className="h-3.5 w-3/5 rounded-full bg-[#1A1A1D]" />
                  </div>
                </div>

                {/* Badge timestamp */}
                <Skeleton className="h-5 w-24 rounded-full bg-[#1A1A1D] shrink-0" />
              </div>
            </CardPanel>
          </Card>
        ))}
      </div>
    </div>
  );
};
