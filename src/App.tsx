import { useState, type ChangeEvent } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
function App() {

  const [portfolioType,setPortfolioType]=useState("Chemical Engineer");

  const handlePortfolioType = (e:ChangeEvent<HTMLSelectElement>)=>{
    setPortfolioType(e.target.value)
  }

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
      
      <Header name="Maryam Elsheikh" links={headerMenu} avatarSrc="avatar2.jpg" portfolioType={portfolioType}/>

      <Hero portfolioType={portfolioType} handlePortfolioType={handlePortfolioType}/>
    </div>
  );
}

export default App;
