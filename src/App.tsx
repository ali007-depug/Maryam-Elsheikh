import { useState, type ChangeEvent } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/AboutMe/About";
import WorkExperience from "./components/Work/WorkExperience";
import WorkExperienceWriter from "./components/Work/WorkExperienceWriter";
import Gallary from "./components/Gallary/Gallary";
import FloatingSelect from "./components/FloatingSelect";
function App() {
  const [portfolioType, setPortfolioType] = useState("Chemical Engineer");

  const handlePortfolioType = (e: ChangeEvent<HTMLSelectElement>) => {
    setPortfolioType(e.target.value);
  };

  const headerMenu = [
    {
      label: "Home",
      href: "#",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Works",
      href: "#works",
    },
  ];
  return (
    <div className="min-h-[100dvh]">
      {/* floatin select */}
      <FloatingSelect handlePortfolioType={handlePortfolioType} portfolioType={portfolioType}/>
      {/* header */}
      <Header
        name="Maryam Elsheikh"
        links={headerMenu}
        avatarSrc="avatar2.jpg"
        portfolioType={portfolioType}
      />
      {/* hero */}
      <Hero
        portfolioType={portfolioType}
        handlePortfolioType={handlePortfolioType}
      />
      {/* about */}
      <About />

      {/* work experience */}
      {portfolioType === "Chemical Engineer" ? (
        <WorkExperience />
      ) : (
        <WorkExperienceWriter />
      )}

      {/* <Gallary/> */}
      {portfolioType === 'Content Writer' && <Gallary/>}
    </div>
  );
}

export default App;
