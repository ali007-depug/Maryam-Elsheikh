import type { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { heroData } from "../../data/Hero";

interface HeroProps {
  portfolioType: "Chemical Engineer" | "Content Writer";
  handlePortfolioType: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface SelectProp {
  portfolioType: "Chemical Engineer" | "Content Writer";
  handlePortfolioTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Hero({
  portfolioType,
  handlePortfolioType,
}: HeroProps) {
  const data = heroData.find((h) => h.type === portfolioType);

  const getAnimation = (type: string) => {
    switch (type) {
      case "float":
        return { animate: { y: [0, -15, 0] } };
      case "rotate":
        return { animate: { rotate: [0, 15, -15, 0] } };
      case "scale":
        return { animate: { scale: [1, 1.2, 1] } };
      case "fade":
        return { animate: { opacity: [0.3, 1, 0.3] } };
      case "custom":
        return { animate: { y: [0, -15, 0], x: [0, 5, 0] } };
      default:
        return { animate: {} };
    }
  };

  return (
    <main
      className={`w-full min-h-[90dvh] relative top-[64px] ${
        portfolioType === "Chemical Engineer"
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"
          : "bg-gradient-to-r from-orange-950 via-orange-900 to-orange-800"
      }`}
      role="main"
    >
      <div className="flex flex-col items-center justify-center gap-5 px-3 sm:px-6">
        {/* Select wrapper */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-2 items-center mt-10 text-center md:text-left">
          <h1 className="text-lg sm:text-xl font-bold leading-snug text-white">
            Hello, I'm{" "}
            <span
              className={`text-2xl ${
                portfolioType === "Chemical Engineer"
                  ? "text-sky-200"
                  : "text-orange-400"
              } font-extrabold`}
            >
              Maryam Elsheikh
            </span>
            , I'm a
          </h1>

          <div className="text-lg sm:text-xl font-semibold">
            <Select
              handlePortfolioTypeChange={handlePortfolioType}
              portfolioType={portfolioType}
            />
          </div>
        </div>
        {/* end select wrapper */}
      </div>

      {/* Portfolio */}
      <section
        className={`flex flex-col items-center rounded py-6 sm:py-8 px-3 ${data?.bgGradient}`}
        aria-labelledby="portfolio-heading"
      >
        <div className="flex flex-col md:flex-row gap-10 sm:gap-12 w-full max-w-6xl">
          {/* text */}
          <div className="w-full md:w-1/2">
            <h2
              id="portfolio-heading"
              className="text-2xl md:text-3xl font-bold text-white mb-4 text-center md:text-left"
            >
              {data?.title}
            </h2>
            <div className="text-gray-200 leading-relaxed sm:leading-8 text-base sm:text-lg text-center md:text-left">
              {data?.type === "Chemical Engineer" ? (
                <p>{data.description}</p>
              ) : (
                <div
                  dangerouslySetInnerHTML={{ __html: data?.description || "" }}
                />
              )}
            </div>
          </div>

          {/* image + floating icons */}
          <div className="relative w-fit m-auto flex justify-center items-center">
            {/* glow */}
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className={`absolute w-64 h-64 rounded-full ${data?.glowColor} blur-3xl opacity-40`}
              aria-hidden="true"
            />

            {/* main image */}
            <img
              src={data?.heroImg}
              alt="hero"
              className="relative w-60 h-60 rounded-full border-4 border-white shadow-xl object-cover z-1"
              fetchPriority="high"
            />

            {/* floating icons */}
            {data?.floatingIcons.map((icon, i) => {
              const { animate } = getAnimation(icon.animation);
              return (
                <motion.img
                  key={i}
                  src={icon.src}
                  alt={icon.alt}
                  className={icon.className}
                  animate={animate}
                  transition={{
                    repeat: Infinity,
                    duration: icon.duration,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
          </div>
        </div>


        {/* buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {data?.buttons.map((btn, i) =>
            btn.download ? (
              <a
                key={i}
                href={btn.href}
                download
                className={btn.style}
                aria-label={`Download ${btn.label}`}
              >
                {btn.label}
              </a>
            ) : (
              <a
                key={i}
                href={btn.href}
                className={btn.style}
                aria-label={`Go to ${btn.label}`}
              >
                {btn.label}
              </a>
            )
          )}
        </div>
      </section>
    </main>
  );
}

// Select component
export function Select({ handlePortfolioTypeChange, portfolioType }: SelectProp) {
  return (
    <>
    <label className="sr-only" htmlFor="portfolio-select">
      Select Portfolio Type
    </label>
    <select
      id="portfolio-select"
      name="portfolio"
      aria-label="Select portfolio type"
      className="border px-2 py-1 mt-2 md:mt-0 text-center text-white bg-black/60 focus:outline-orange-500 border-orange-300 rounded cursor-pointer w-full md:w-auto"
      onChange={handlePortfolioTypeChange}
      value={portfolioType}
    >
      <option value="Chemical Engineer">Chemical Engineer</option>
      <option value="Content Writer">Content Writer</option>
    </select>
    </>
  );
}






