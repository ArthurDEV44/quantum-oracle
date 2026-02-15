"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonLoader() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      {/* Oracle response placeholder */}
      <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-10 space-y-4">
        <Skeleton className="h-3 w-32 mx-auto rounded-full bg-[#1A1A1D]" />
        <div className="space-y-3 max-w-lg mx-auto">
          <Skeleton className="h-6 rounded-full bg-[#1A1A1D]" />
          <Skeleton className="h-6 w-3/4 mx-auto rounded-full bg-[#1A1A1D]" />
        </div>
      </div>

      {/* Bento grid placeholder */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* 6 tradition cards */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl bg-[#161618] border border-white/[0.06] p-5 space-y-3"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="w-8 h-8 rounded-full bg-[#1A1A1D] shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-2 w-16 rounded-full bg-[#1A1A1D]" />
                <Skeleton className="h-4 w-3/4 rounded-full bg-[#1A1A1D]" />
              </div>
            </div>
            <Skeleton className="h-3 rounded-full bg-[#1A1A1D]" />
            <Skeleton className="h-3 w-2/3 rounded-full bg-[#1A1A1D]" />
          </div>
        ))}

        {/* 2 wide cards (Synthèse + Signal Quantique) */}
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={`wide-${i}`}
            className="rounded-2xl bg-[#161618] border border-white/[0.06] p-5 space-y-3 lg:col-span-2"
          >
            <Skeleton className="h-4 w-32 rounded-full bg-[#1A1A1D]" />
            <Skeleton className="h-3 rounded-full bg-[#1A1A1D]" />
            <Skeleton className="h-3 w-5/6 rounded-full bg-[#1A1A1D]" />
          </div>
        ))}
      </div>
    </section>
  );
}
