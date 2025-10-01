import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { Select } from "./Hero/Hero";

interface floatingSelectProp {
  handlePortfolioType: (e: ChangeEvent<HTMLSelectElement>) => void;
  portfolioType: "Chemical Engineer" | "Content Writer";
}
export default function FloatingSelect({
  handlePortfolioType,
  portfolioType,
}: floatingSelectProp) {
  const [showFloatingSelect, setShowFloatingSelect] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY; // current scroll value

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 500) {
        // Scrolling DOWN and past 900px
        setShowFloatingSelect(true);
      } else if (window.scrollY < lastScrollY) {
        // Scrolling UP
        setShowFloatingSelect(false);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` ${
        portfolioType === "Chemical Engineer"
          ? "bg-black/80"
          : "bg-orange-700/80 border-white"
      } border p-3 right-5 bottom-1 fixed z-99 flex max-md:flex-col transition-all duration-300 ease-in-out items-center gap-2 rounded-md ${
        showFloatingSelect ? "opacity-100 visible" : "opacity-0"
      }`}
    >
      <p className="text-white max-sm:text-sm font-semibold">Me as : </p>
      <Select
        portfolioType={portfolioType}
        handlePortfolioTypeChange={handlePortfolioType}
      />
    </div>
  );
}
