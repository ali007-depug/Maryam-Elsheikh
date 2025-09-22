import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { Select } from "./Hero/Hero";

interface floatingSelectProp {
  handlePortfolioType: (e: ChangeEvent<HTMLSelectElement>) => void;
  portfolioType: string;
}
export default function FloatingSelect({
  handlePortfolioType,
  portfolioType,
}: floatingSelectProp) {
  const [showFloatingSelect, setShowFloatingSelect] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1300) {
        setShowFloatingSelect(true);
      } else {
        setShowFloatingSelect(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // cleanup function
   return()=> window.removeEventListener("scroll", handleScroll);
  },[]);
  return (
    <div
      className={`w-50  ${
        portfolioType === "Chemical Engineer"
          ? "bg-black/80"
          : "bg-orange-700/80 border-white"
      } border p-3 right-5 bottom-1 fixed z-99 flex flex-col transition-all duration-300 ease-in-out items-center gap-2 rounded-md ${
        showFloatingSelect ? "opacity-100 visible" : "opacity-0"
      }`}
    >
      <p className="text-white max-sm:text-sm font-semibold">
        Me as :{" "}
      </p>
      <Select portfolioType={portfolioType} handlePortfolioTypeChange={handlePortfolioType} />
    </div>
  );
}
