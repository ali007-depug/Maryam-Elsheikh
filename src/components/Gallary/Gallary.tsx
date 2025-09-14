import ImgSlider from "./ImgSlider";

export default function Gallary() {
  return (
    <section
      id="gallary"
      className="bg-gradient-to-br from-gray-900 via-blue-950 to-blue-900 py-20 md:px-6"
    >
      <div className="relative mb-16 sm:mb-20 inline-block w-full text-center">
        {/* Background text */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-11 w-full">
          <span className="text-[60px] sm:text-[100px] lg:text-[140px] font-extrabold text-white opacity-10 tracking-widest select-none">
            GALLARY
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-center font-bold text-4xl sm:text-5xl lg:text-6xl text-white relative">
          Gallary
        </h1>
      </div>
      {/* small desc */}
      <div className="w-full mx-auto  max-w-3xl px-6 text-center">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-blue-200">
          In addition to writing content, I enjoy practicing{" "}
          <span className="font-semibold italic inline-block ">
            Arabic handwriting
          </span>{" "}
          as a creative outlet. Through calligraphy, I explore the beauty of
          words, blending art with expression. Each piece reflects not just
          language, but
          <span className="italic text-gray-100">
            {" "}
            rhythm, culture, and emotion
          </span>
          .
        </p>
      </div>
      <ImgSlider />
        <a
          href="https://www.instagram.com/maryamelsheikh9?igsh=MW5wcDRxaWx6aDNsbw=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-fit mx-auto items-center justify-center gap-3 mt-5 bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition font-bold"
        >
          View more on Instagram
        <img src="instagram.png" alt="instagram icon" width={50} height={50} className="size-10"/>
        </a>
    </section>
  );
}
