import type { ChangeEvent } from "react";
import { motion } from "framer-motion";

interface HeroProps {
  portfolioType: string;
  handlePortfolioType: (e: ChangeEvent<HTMLSelectElement>) => void;
}
export default function Hero({
  portfolioType,
  handlePortfolioType,
}: HeroProps) {
  return (
    <div className="relative top-18 w-full  h-[100dvh] z-1">
      <div className="flex flex-col items-center gap-5 mb-10">
        {/* select wrapper */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-2 items-start md:items-center mt-10">
  <h1 className="text-xl sm:text-2xl font-bold leading-snug">
    Hello, I'm{" "}
    <span className="text-orange-400 font-extrabold">Maryam</span>, I'm a
  </h1>

  <div className="text-lg sm:text-xl font-semibold">
    <select
      name="meAs"
      className="border px-2 py-1 mt-2 md:mt-0 text-center focus:outline-orange-500 border-orange-300 rounded cursor-pointer w-full md:w-auto"
      onChange={handlePortfolioType}
    >
      <option value="Chemical Engineer">Chemical Engineer</option>
      <option value="Content Writer">Content Writer</option>
    </select>
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

// function Enginner() {
//   return (
//     <div className="flex justify-around">
//       {/* text */}
//       <div className="font-semibold text-xl w-1/2 px-5 flex items-center">
//         <p className="leading-8 text-">
//           I'm a highly motivated Chemical Engineer , fresh graduate with +1
//           training and courses ,Trained as Quality Control engineer at Sudanese
//           Standered Metrology & Organaization and Azal Pharma Company.
//         </p>
//       </div>
//       {/* img */}
//       <div className="w-1/4 h-1/4  relative">
//         {/* svg icon */}
//         <img src="icon.svg" alt="" className="w-10 absolute" />
//         {/* hero img */}
//         <img
//           src="hero.jpeg"
//           alt="hero img"
//           className="rounded-full border relative bottom border-black shadow-md shadow-black w-90 z-5"
//         />
//         {/* svg icon */}
//         <img src="icon2.svg" alt="" className="w-10 animate-icon absolute bottom-0 right-0 transform rotate-20 opacity-80" />
//         {/* svg icon */}
//         <img src="icon3.svg" alt="" className="w-10 absolute bottom-5 left-0 transform rotate-20 opacity-90 animate-selfPulse" />
//         <img src="icon4.svg" alt="" className="w-10 animate-iconshow absolute right-0 top-0 opacity-70" />

//       </div>
//     </div>
//   );
// }

function Engineer() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-8 py-12 bg-gradient-to-r from-orange-950 via-orange-900 to-orange-800 rounded shadow-lg h-[80dvh]">
      {/* text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Chemical Engineer
        </h2>
        <p className="text-gray-200 leading-8 text-lg">
          I’m a highly motivated{" "}
          <span className="font-semibold">Chemical Engineer</span>, fresh
          graduate with <span className="font-semibold">1+ years</span> of
          training and courses. I trained as a{" "}
          <span className="font-semibold">Quality Control Engineer</span> at
          Sudanese Standard Metrology Organization and Azal Pharma Company.
        </p>
      </div>

      {/* img */}
      <div className="relative flex justify-center items-center">
        {/* background glow */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute w-64 h-64 rounded-full bg-orange-600 blur-3xl opacity-40"
        />

        {/* hero img */}
        <img
          src="hero.jpeg"
          alt="hero"
          className="relative w-60 h-60 rounded-full border-4 border-white shadow-xl object-cover z-10"
        />

        {/* floating icons */}
        <motion.img
          src="icon6.svg"
          alt="icon"
          className="absolute w-10 top-0 left-1/4"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.img
          src="icon2.svg"
          alt="icon"
          className="absolute w-10 bottom-0 right-10 z-11"
          animate={{ rotate: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
        <motion.img
          src="icon3.svg"
          alt="icon"
          className="absolute w-10 bottom-10 z-11 left-0"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        />
        <motion.img
          src="icon5.svg"
          alt="icon"
          className="absolute w-10 top-5 z-11 right-0"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
      </div>
    </section>
  );
}

function ContentWriter() {
  return (
<section className="flex flex-col md:flex-row items-center justify-between gap-10 px-8 py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded shadow-lg h-[80dvh]">
{/* text */}
      <div className="md:w-1/2 text-center md:text-left">
  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
    Content Writer
  </h2>
  <p className="text-gray-200 leading-8 text-lg">
    Former <span className="font-semibold">Content Writer</span> at TEDX Wad-Madani Conference (2021) &amp; former 
    <span className="font-semibold"> Articles Writer</span> at Akhirlahza Newspaper. <br /><br />
    One of the main founders of <span className="font-semibold">Moqueroon Organization</span> that cares about 
    community services and awareness for college students. <br /><br />
    Volunteered as <span className="font-semibold">Content Writer</span>, Page Manager, and 
    <span className="font-semibold"> Social Media Content Creator</span> for several charitable organizations. 
    Passionate about <span className="font-semibold">sustainable energy</span>, 
    <span className="font-semibold"> safety &amp; quality control</span>, 
    <span className="font-semibold"> water treatment</span>, and <span className="font-semibold">content writing</span>.
  </p>
</div>


      {/* img */}
      <div className="relative flex justify-center items-center">
        {/* background glow */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute w-64 h-64 rounded-full bg-gray-600 blur-3xl opacity-40"
        />

        {/* hero img */}
        <img
          src="hero.jpeg"
          alt="hero"
          className="relative w-60 h-60 rounded-full border-4 border-white shadow-xl object-cover z-10"
        />

        {/* floating icons */}
        <motion.img
          src="write4.svg"
          alt="icon"
          className="absolute w-10 top-10 left-[-10px]"
          animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        <motion.img
          src="write3.svg"
          alt="icon"
          className="absolute w-10 bottom-20 right-[-20px] z-11"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        <motion.img
          src="write1.svg"
          alt="icon"
          className="absolute w-10 bottom-10 z-11 left-0"
          animate={{ scale: [1, 1.3, 0.9, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        <motion.img
          src="write2.svg"
          alt="icon"
          className="absolute w-10 top-5 z-11 right-0"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
