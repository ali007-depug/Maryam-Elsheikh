const WorkSkeleton = () => (
  <section className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden animate-pulse">
    <div className="max-w-7xl mx-auto px-6 relative">
      <div className="relative space-y-12">
        {/* Vertical Line Skeleton */}
        <div className="absolute left-4 lg:left-12 top-0 h-full w-[1px] bg-white/5" />

        {[1, 2].map((i) => (
          <div key={i} className="relative pl-12 lg:pl-32">
            {/* Dot Skeleton */}
            <div className="absolute left-3 lg:left-11 top-8 w-3 h-3 rounded-full bg-slate-800 border-2 border-slate-700" />

            {/* Card Skeleton */}
            <div className="bg-white/5 border border-white/5 rounded-[2.5rem] p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Logo Box */}
                <div className="h-24 w-24 shrink-0 bg-slate-900 rounded-[2rem]" />

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="h-8 w-48 bg-white/5 rounded-lg" />
                      <div className="h-4 w-32 bg-white/5 rounded-lg" />
                    </div>
                    <div className="h-10 w-32 bg-white/5 rounded-full" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-white/5 rounded-full" />
                    <div className="h-4 w-[80%] bg-white/5 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSkeleton;
