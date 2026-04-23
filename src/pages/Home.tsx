import { useState, useEffect, type ChangeEvent, lazy } from "react";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
const About = lazy(() => import("../components/AboutMe/About"));
const WorkExperience = lazy(() => import("../components/Work/WorkExperience"));
const Gallary = lazy(() => import("../components/Gallary/Gallary"));
const ContactMe = lazy(() => import("../components/Contact/ContactMe"));
import FloatingSelect from "../components/FloatingSelect";
const Footer = lazy(() => import("../components/ui/Footer"));
export default function Home() {
  const [portfolioType, setPortfolioType] = useState<
    "Chemical Engineer" | "Content Writer"
  >("Chemical Engineer");

  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // trigger fade-out
      setTimeout(() => {
        setIsLoading(false); // remove loader
      }, 100); // matches CSS transition
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handlePortfolioType = (e: ChangeEvent<HTMLSelectElement>) => {
    setPortfolioType(e.target.value as "Chemical Engineer" | "Content Writer");
  };

  if (isLoading) {
    return (
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center bg-gray-900 text-white transition-opacity duration-100 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Avatar / Logo */}
        <img
          src="avatar2.webp"
          alt="Maryam Elsheikh"
          className="w-28 h-28 rounded-full mb-6 shadow-lg border-4 border-white"
        />

        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>

        {/* Text */}
        <h1 className="text-lg font-semibold tracking-wide animate-bounce">
          Loading Portfolio...
        </h1>
      </div>
    );
  }

  return (
    <div
      className={`min-h-[100dvh] scroll-smooth transition-opacity duration-700 ${
        fadeOut ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* floating select */}
      <FloatingSelect
        handlePortfolioType={handlePortfolioType}
        portfolioType={portfolioType}
      />
      {/* header */}
      <Header name="Maryam Elsheikh" portfolioType={portfolioType} />
      {/* hero */}
      <Hero
        portfolioType={portfolioType}
        handlePortfolioTypeChange={handlePortfolioType}
      />
      {/* about */}
      <About portfolioType={portfolioType} />

      {/* work experience */}
      <WorkExperience portfolioType={portfolioType} />

      {/* gallery */}
      {portfolioType === "Content Writer" && <Gallary />}

      {/* contact */}
      <ContactMe portfolioType={portfolioType} />

      {/* footer */}
      <Footer />
    </div>
  );
}
