import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImgSlider() {
  const slides = [
    {
      img: "img1.jpg",
      title: "Part of a poem",
      desc: "For you are like the night that ever overtakes me,Though I had thought the distance from you was vast.",
    },
    {
      img: "img2.jpg",
      title: "A popular Sudanese saying.",
      desc: "ًWhat is coming is better than what is gone.",
    },
    {
      img: "img3.jpg",
      title: "Part of a poem",
      desc: "I carry my country, wherever I go.",
    },
    {
      img: "img4.jpg",
      title: "Part of a prayer",
      desc: "Save us by Your mercy.",
    },
    {
      img: "img5.jpg",
      title: "Community Voice",
      desc: "Amplifying perspectives that matter through thoughtful writing.",
    },
    {
      img: "img6.jpg",
      title: "Community Voice",
      desc: "Amplifying perspectives that matter through thoughtful writing.",
    },
    {
      img: "img7.jpg",
      title: "Community Voice",
      desc: "Amplifying perspectives that matter through thoughtful writing.",
    },
    {
      img: "img8.jpg",
      title: "Community Voice",
      desc: "Amplifying perspectives that matter through thoughtful writing.",
    },
    {
      img: "img9.jpg",
      title: "Community Voice",
      desc: "Amplifying perspectives that matter through thoughtful writing.",
    },
    {
      img: "img10.jpg",
      title: "Community Voice",
      desc: "Amplifying perspectives that matter through thoughtful writing.",
    },
    {
      img: "img11.jpg",
      title: "Community Voice",
      desc: "Amplifying perspectives that matter through thoughtful writing.",
    },
    {
      img: "img12.jpg",
      title: "Community Voice",
      desc: "Amplifying perspectives that matter through thoughtful writing.",
    },
    {
      img: "img13.jpg",
      title: "Community Voice",
      desc: "Amplifying perspectives that matter through thoughtful writing.",
    },
    {
      img: "img14.jpg",
      title: "Community Voice",
      desc: "Amplifying perspectives that matter through thoughtful writing.",
    },
    {
      img: "img15.jpg",
      title: "Community Voice",
      desc: "Amplifying perspectives that matter through thoughtful writing.",
    },
    {
      img: "img16.jpg",
      title: "Community Voice",
      desc: "Amplifying perspectives that matter through thoughtful writing.",
    },
    {
      img: "img17.jpg",
      title: "Community Voice",
      desc: "Amplifying perspectives that matter through thoughtful writing.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="lg:max-w-6xl  mx-auto py-16 px-6">
      <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-lg bg-gray-900">
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
              i === index ? "bg-gray-950" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
