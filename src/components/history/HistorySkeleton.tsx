export const HistorySkeleton = () => {
  return (
    <div className="space-y-4 max-w-4xl mx-auto px-6 py-8">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white/40 backdrop-blur-sm border border-slate-100 rounded-2xl p-7 space-y-4 animate-pulse"
        >
          <div className="flex justify-between items-start">
            <div className="h-3 bg-orange-100/40 rounded-full w-2/3" />
            <div className="h-3 bg-slate-100/60 rounded-full w-1/5" />
          </div>
          <div className="space-y-2.5 pt-2">
            <div className="h-3 bg-slate-100/60 rounded-full w-full" />
            <div className="h-3 bg-slate-100/60 rounded-full w-5/6" />
            <div className="h-3 bg-violet-100/30 rounded-full w-4/6" />
          </div>
        </div>
      ))}
    </div>
  );
};
