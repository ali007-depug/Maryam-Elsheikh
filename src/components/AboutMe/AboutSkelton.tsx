const AboutSkeleton = () => (
  <section className="mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 animate-pulse">

    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Left: Paragraph Skeletons */}
      <div className="lg:col-span-7 space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-3">
            <div className="h-5 bg-slate-900 rounded-full w-full" />
            <div className="h-5 bg-slate-900 rounded-full w-[95%]" />
            <div className="h-5 bg-slate-900 rounded-full w-[40%]" />
          </div>
        ))}
        {/* Button Skeleton */}
        <div className="pt-6 flex justify-center">
          <div className="h-14 w-64 bg-slate-900 rounded-2xl shadow-xl" />
        </div>
      </div>

      {/* Right: Card Skeletons (2x2 Grid) */}
      <div className="lg:col-span-5 grid grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-8 rounded-[2.5rem] bg-slate-900 border border-slate-900 flex flex-col items-center space-y-4">
            <div className="p-4 rounded-2xl bg-white/10 w-12 h-12" />
            <div className="space-y-2 w-full flex flex-col items-center">
              <div className="h-2 w-12 bg-slate-900 rounded-full" />
              <div className="h-4 w-24 bg-slate-900 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSkeleton