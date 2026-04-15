
import AboutContent from "./AboutContent";



export default function About({
  portfolioType,
}: {
  portfolioType: "Chemical Engineer" | "Content Writer";
}) {

  // Styles based on portfolioType
  const theme = {
    bgText:
      portfolioType === "Chemical Engineer"
        ? "text-gray-600/10"
        : "text-orange-700/10",
    heading:
      portfolioType === "Chemical Engineer"
        ? "text-gray-700"
        : "text-orange-500",
    highlight:
      portfolioType === "Chemical Engineer"
        ? "text-slate-600 font-bold"
        : "text-orange-500 font-bold",
    button:
      portfolioType === "Chemical Engineer"
        ? "bg-sky-800 hover:bg-sky-600"
        : "bg-orange-600 hover:bg-orange-700",
  };


  return (
    <section
      id="about"
      className="mx-auto  px-6 sm:px-8 lg:px-12 py-16 sm:py-24 relative overflow-hidden"
    >
      {/* Heading Module */}
      <div className="relative mb-24 text-center">
        <span
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] md:text-[140px] font-black tracking-[0.2em] select-none pointer-events-none uppercase ${theme.bgText}`}
        >
          About
        </span>
        <h2
          className={`relative text-4xl md:text-6xl font-black uppercase tracking-tighter ${theme.heading}`}
        >
          About Me
        </h2>
      </div>
<AboutContent portfolioType={portfolioType}/>
    </section>
  );
}
