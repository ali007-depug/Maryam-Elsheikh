import { motion } from "framer-motion";

export default function ContentWriter() {
  return <Hero />;
}

function Hero() {
  return (
    <section className="flex flex-col items-center  bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded shadow-lg min-h-[60dvh] md:min-h-[90dvh]">
      <div className="flex flex-col md:flex-row justify-between gap-8 sm:gap-10 px-4 sm:px-8 py-10 sm:py-12">
        {/* text */}
        <Text />
        {/* img */}
        <Img />
      </div>
      {/* buttons */}
      <Buttons />
    </section>
  );
}

function Text() {
  return (
    <div className="w-full md:w-1/2 text-center md:text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
        Content Writer
      </h2>
      <p className="text-gray-200 leading-relaxed sm:leading-8 text-base sm:text-lg">
        Former <span className="font-semibold">Content Writer</span> at TEDX
        Wad-Madani Conference (2021) &amp; former
        <span className="font-semibold"> Articles Writer</span> at Akhirlahza
        Newspaper. <br />
        <br />
        One of the main founders of{" "}
        <span className="font-semibold">Moqueroon Organization</span> that cares
        about community services and awareness for college students. <br />
        <br />
        Volunteered as <span className="font-semibold">Content Writer</span>,
        Page Manager, and
        <span className="font-semibold"> Social Media Content Creator</span> for
        several charitable organizations. Passionate about{" "}
        <span className="font-semibold">sustainable energy</span>,{" "}
        <span className="font-semibold">safety &amp; quality control</span>,{" "}
        <span className="font-semibold">water treatment</span>, and{" "}
        <span className="font-semibold">content writing</span>.
      </p>
    </div>
  );
}

function Img() {
  return (
    <div className="relative flex justify-center items-center self-start">
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
  );
}

function Buttons() {
  return (
    <div className="flex gap-10">
      {/* download cv */}
      <button>
        <a
          href="/maryam_elsheikh_content_writer_Cv.pdf"
          download="maryam_elsheikh_content_writer_Cv.pdf"
          className="px-4 py-5 bg-white font-semibold rounded-lg shadow-md hover:bg-gray-200 hover:text-black transition-all duration-300 ease-in-out"
        >
          Download CV 📎
        </a>
      </button>
      {/* explore */}
      <button>
        <a
          className="px-4 py-5 bg-gray-600 text-white  font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-gray-500"
        >
          Explore my Work
        </a>
      </button>
    </div>
  );
}
