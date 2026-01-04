export const HistorySkeleton = () => {
  return (
    <div className="space-y-4 max-w-4xl mx-auto px-4 py-8">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 space-y-4 animate-pulse"
        >
          <div className="flex justify-between items-start">
            <div className="h-4 bg-neutral-800 rounded w-2/3" />
            <div className="h-3 bg-neutral-800 rounded w-1/4" />
          </div>
          <div className="space-y-2 pt-2">
            <div className="h-4 bg-neutral-800 rounded w-full" />
            <div className="h-4 bg-neutral-800 rounded w-5/6" />
          </div>
        </div>
      ))}
    </div>
  );
};

