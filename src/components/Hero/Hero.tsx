import type { ChangeEvent } from "react";
import ContentWriter from "./ContentWriter";
import Engineer from "./Engineer";

interface HeroProps {
  portfolioType: string;
  handlePortfolioType: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface selectProp {
  portfolioType: string;
  handlePortfolioTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export default function Hero({
  portfolioType,
  handlePortfolioType,
}: HeroProps) {
  return (
    <div
      className={`w-full min-h-[90dvh]  ${
        portfolioType === "Chemical Engineer"
          ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700"
          : "bg-gradient-to-r from-orange-950 via-orange-900 to-orange-800"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-5 mb-10">
        {/* select wrapper */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-2 items-start md:items-center mt-10">
          <h1 className="text-xl sm:text-2xl font-bold leading-snug text-white">
            Hello, I'm{" "}
            <span
              className={`${
                portfolioType === "Chemical Engineer"
                  ? "text-sky-200"
                  : "text-orange-400"
              } font-extrabold`}
            >
              Maryam
            </span>
            , I'm a
          </h1>

          <div className="text-lg sm:text-xl font-semibold">
            <Select handlePortfolioTypeChange={handlePortfolioType} portfolioType={portfolioType} />
          </div>
        </div>
        {/* end select wrapper */}
      </div>
      {/* portfolio */}
      <div className="flex justify-center items-center transition-all duration-500 ease-in-out bg-a-900">
        {portfolioType === "Chemical Engineer" ? (
          <Engineer />
        ) : (
          <ContentWriter />
        )}
      </div>
    </div>
  );
}

// select component
export function Select({ handlePortfolioTypeChange , portfolioType}: selectProp) {
  return (
    <select
      name="meAs"
      className="border px-2 py-1 mt-2 md:mt-0 text-center text-white bg-black/60 focus:outline-orange-500 border-orange-300 rounded cursor-pointer w-full md:w-auto"
      onChange={handlePortfolioTypeChange} value={portfolioType}
    >
      <option value="Chemical Engineer">Chemical Engineer</option>
      <option value="Content Writer">Content Writer</option>
    </select>
  );
}
