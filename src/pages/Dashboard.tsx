import { useState } from "react";
import type { ChangeEvent } from "react";
import Header from "../components/Dashboard/Header/Header";
import Hero from "../components/Dashboard/Hero/Hero";
import AboutAdmin from "../components/Dashboard/about/AboutAdmin";
import WorkAdmin from "../components/Dashboard/work/workAdmin";

export default function Dashboard() {
  const [portfolioType, setPortfolioType] = useState<
    "Chemical Engineer" | "Content Writer"
  >("Chemical Engineer");

  const handlePortfolioType = (e: ChangeEvent<HTMLSelectElement>) => {
    setPortfolioType(e.target.value as "Chemical Engineer" | "Content Writer");
  };

  return (
    <div>
      <Header portfolioType={portfolioType} />

      {/* Hero */}
      <Hero
        portfolioType={portfolioType}
        handlePortfolioTypeChange={handlePortfolioType}
      />
      {/* about */}
      <AboutAdmin portfolioType={portfolioType} />
      {/* work */}
      <WorkAdmin portfolioType={portfolioType} />
    </div>
  );
}
