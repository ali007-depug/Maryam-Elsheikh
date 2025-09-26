import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImgSlider() {
  const slides = [
    {
      img: "img1.webp",
      title: "Part of a poem",
      desc: "For you are like the night that ever overtakes me,Though I had thought the distance from you was vast.",
    },
    {
      img: "img2.webp",
      title: "A popular Sudanese saying",
      desc: "What is coming is better than what is gone.",
    },
    {
      img: "img3.webp",
      title: "Part of a poem",
      desc: "Carry your country, wherever you go.",
    },
    {
      img: "img4.webp",
      title: "Part of a prayer",
      desc: "Save us by Your mercy.",
    },
    {
      img: "img5.webp",
      title: "Part of a poem",
      desc: "On this earth, there is what makes life worth living."
    },
    {
      img: "img6.webp",
      title: "Literary prose",
      desc: "ًWritten by Me.",
    },
    {
      img: "img7.webp",
      title: "Literary prose",
      desc: "Written by Me.",
    },
    {
      img: "img8.webp",
      title: "Literary prose",
      desc: "Written by Me.",
    },
    {
      img: "img9.webp",
      title: "Part of a prayer",
      desc: "Labbayk,life's path is a lonely road, except when leading to You.",
    },
    {
      img: "img10.webp",
      title: "Philosophical advice",
      desc: "Lower your hand. What love does not preserve, power will not keep.",
    },
    {
      img: "img11.webp",
      title: "A verse from the Holy Quran",
      desc: "I shall not leave until I reach.",
    },
    {
      img: "img12.webp",
      title: "Popular Pharse",
      desc: "Tomorrow, the birds will fly.",
    },
    {
      img: "img13.webp",
      title: "Part of a prayer",
      desc: "And as for new beginnings, grant us, O Lord, the courage to embark, the curiosity to experiment, and the joy of arrival.",
    },
    {
      img: "img14.webp",
      title: "ًWisdom",
      desc: "No one knocks on doors that are always open.",
    },
    {
      img: "img15.webp",
      title: "Part of a prayer",
      desc: "O Allah, [grant us] the best of matters, the best of days, and the best of people.",
    },
    {
      img: "img16.webp",
      title: "ًWisdom",
      desc: "Remember that every tomorrow begins with your 'now'.",
    },
    {
      img: "img17.webp",
      title: "Literary prose",
      desc: "Written by me.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 7500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="lg:max-w-6xl  mx-auto py-16 px-6">
      <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br from-orange-800 via-orange-900 to-orange-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[index].img}
              alt={slides[index].title}
              className="w-full h-full object-contain rounded-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
              <h3 className="text-xl font-semibold text-white">
                {slides[index].title}
              </h3>
              <p className="text-gray-200 text-sm">{slides[index].desc}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-orange-950" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
