/**
 * HERO TEXT SKELETON
 * Mimics the multi-line prose structure with a pulse animation.
 */
const HeroTextSkelton = () => (
  <div className="space-y-4 animate-pulse max-w-2xl">
    {/* Line 1 - Long */}
    <div className="h-5 md:h-6 bg-slate-300 rounded-full w-full" />
    {/* Line 2 - Medium */}
    <div className="h-5 md:h-6 bg-slate-200 rounded-full w-[90%]" />
    {/* Line 3 - Long */}
    <div className="h-5 md:h-6 bg-slate-400 rounded-full w-[95%]" />
    {/* Line 4 - Short */}
    <div className="h-5 md:h-6 bg-slate-500 rounded-full w-[40%]" />
  </div>
);

export default HeroTextSkelton