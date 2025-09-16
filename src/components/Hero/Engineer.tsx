import { motion } from "framer-motion";

export default function Engineer() {
  return <Hero />;
}

function Hero() {
  return (
    <section className="flex flex-col  items-center  bg-gradient-to-r from-orange-950 via-orange-900 to-orange-800 rounded shadow-lg py-8 ">
        <div className="flex flex-col md:flex-row justify-between gap-10 px-8 py-12">
      {/* text */}
      <Text />
      {/* img */}
      <Img />
      </div>

      {/* buttons */}
      <Buttons/>
    </section>
  );
}

function Text() {
  return (
    <div className="md:w-1/2 text-center md:text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Chemical Engineer
      </h2>
      <p className="text-gray-200 leading-8 text-base sm:text-lg">
        I’m a highly motivated{" "}
        <span className="font-semibold">Chemical Engineer</span>, fresh graduate
        with <span className="font-semibold">1+ years</span> of training and
        courses. I trained as a{" "}
        <span className="font-semibold">Quality Control Engineer</span> at
        Sudanese Standard Metrology Organization and Azal Pharma Company.
      </p>
    </div>
  );
}

function Img() {
  return (
    <div className="relative  w-fit mx-auto flex justify-center items-center">
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
        className="relative w-60 h-60 rounded-full border-4 border-white shadow-xl object-cover z-1"
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
        className="absolute w-10 bottom-0 right-10 z-2"
        animate={{ rotate: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src="icon3.svg"
        alt="icon"
        className="absolute w-10 bottom-10 z-2 left-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      />
      <motion.img
        src="icon5.svg"
        alt="icon"
        className="absolute w-10 top-5 z-2 right-0"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
    </div>
  );
}

function Buttons() {
  return (
    <div className="flex max-sm:gap-5 gap-10 max-sm:px-3">
        {/* download cv */}
        <a
          href="maryam_enginner_Cv.pdf"
          download="maryam_enginner_Cv.pdf"
          className="px-4 py-5 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-all duration-300 ease-in-out"
        >Download My CV 📰</a>
      {/* explore */}
      <button>
        <a
          className="max-sm:px-2 px-4 py-5 bg-white  font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-orange-200"
        >Explore my Work</a>
      </button>

    </div>
  );
}
