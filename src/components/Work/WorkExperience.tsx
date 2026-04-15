import Timeline from "./TimeLine";

interface WorkTimelineProps {
  portfolioType: "Chemical Engineer" | "Content Writer";
}

export default function WorkExperienceTimeline({
  portfolioType,
}: WorkTimelineProps) {
  // Syncing with Global Theme
  const isChemical = portfolioType === "Chemical Engineer";
  const theme = {
    bgText: isChemical ? "text-slate-800/20" : "text-orange-900/20",
    accent: isChemical ? "text-sky-400" : "text-orange-500",
    glow: isChemical ? "bg-sky-500/5" : "bg-orange-500/5",
  };

  return (
    <section
      id="works"
      className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Decor */}
      <div
        className={`absolute top-0 right-0 w-full h-full pointer-events-none ${theme.glow}`}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Cinematic Heading */}
        <div className="relative mb-24 text-center lg:text-left">
          <span
            className={`absolute -top-10 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 text-[70px] md:text-[140px] font-black tracking-tighter select-none pointer-events-none uppercase leading-none ${theme.bgText}`}
          >
            History
          </span>
          <div className="relative flex flex-col lg:flex-row items-center gap-4">
            <div
              className={`h-[2px] w-12 hidden lg:block ${isChemical ? "bg-sky-500" : "bg-orange-500"}`}
            />
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
              Work <span className={theme.accent}>Experience</span>
            </h2>
          </div>
        </div>
        <Timeline portfolioType={portfolioType} />
      </div>
    </section>
  );
}
