import { useState, type ChangeEvent } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/AboutMe/About";
import WorkExperience from "./components/Work/WorkExperience";
import WorkExperienceWriter from "./components/Work/WorkExperienceWriter";
import Gallary from "./components/Gallary/Gallary";
import FloatingSelect from "./components/FloatingSelect";
import ContactMe from "./components/Contact/ContactMe";
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
    <div className="min-h-[100dvh] scroll-smooth">
      {/* floatin select */}
      <FloatingSelect handlePortfolioType={handlePortfolioType} portfolioType={portfolioType}/>
      {/* header */}
      <Header
        name="Maryam Elsheikh"
        links={headerMenu}
        portfolioType={portfolioType}
        avatarSrc="avatar2.jpg"
      />
      {/* hero */}
      <Hero
        portfolioType={portfolioType}
        handlePortfolioType={handlePortfolioType}
      />
      {/* about */}
      <About portfolioType={portfolioType} />

      {/* work experience */}
      {portfolioType === "Chemical Engineer" ? (
        <WorkExperience />
      ) : (
        <WorkExperienceWriter />
      )}

      {/* <Gallary/> */}
      {portfolioType === 'Content Writer' && <Gallary/>}

      {/* contact */}
      <ContactMe portfolioType={portfolioType}/>
    </div>
  );
}

export default App;
