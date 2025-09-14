export default function About() {
    return (
      <section
        id="about"
        className="max-w-4xl flex flex-col justify-center items-center mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20"
      >
        {/* Heading wrapper */}
        <div className="relative mb-16 sm:mb-20 inline-block w-full text-center">
          {/* Background text */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 -z-10 w-full">
            <span className="text-[60px] sm:text-[100px] lg:text-[140px] font-extrabold text-gray-300 dark:text-ray-800 opacity-30 tracking-widest select-none">
              ABOUT
            </span>
          </div>
  
          {/* Main heading */}
          <h1 className="text-center font-bold text-4xl sm:text-5xl lg:text-6xl text-orange-500 relative">
            About Me
          </h1>
        </div>
  
        {/* About content */}
        <div className="space-y-6 text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 dark:ext-gray-300">
          <p>
            I'm <span className="font-semibold text-orange-600 dark:text-orange-400">Maryam</span>, a Chemical Engineer with a passion for creating
            engaging content. I specialize in crafting clear and compelling
            articles that make complex topics easy to understand. With a
            background in engineering and a knack for writing, I bring a unique
            perspective to my work.
          </p>
  
          <p>
            When I'm not writing, you can find me exploring new technologies,
            reading about the latest trends in engineering, or enjoying a good
            book. I'm always eager to learn and take on new challenges.
          </p>
  
          <p>
            Let's connect! Whether you're looking for a skilled content writer or
            just want to chat about engineering, feel free to reach out.
          </p>
        </div>
        {/* linked in button */}

          <button className="flex items-center justify-center gap-3 mt-5 bg-orange-600 text-white px-6 py-3 rounded shadow hover:bg-orange-700 transition font-bold">

          <a
            href="https://www.linkedin.com/in/maryam-elsheikh-123456789/"
            target="_blank"
            rel="noopener noreferrer"
            >
            Connect on LinkedIn 
          </a>
          <img src="linkedIn.webp" alt="linkedin img" width={35} height={35} />
            </button>

      </section>
    );
  }  