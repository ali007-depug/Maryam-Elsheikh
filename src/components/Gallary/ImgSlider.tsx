import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
      title: "Wisdom",
      desc: "Remember that every tomorrow begins with your 'now'.",
    },
    {
      img: "img17.webp",
      title: "Literary prose",
      desc: "Written by me.",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-24 px-6 overflow-hidden">
      <div className="relative group h-[600px] md:h-[600px] flex items-center justify-center">
        
        {/* Background Ambient Glow (Blurred version of current image) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0 scale-110 blur-[100px] pointer-events-none"
            style={{
              backgroundImage: `url(${slides[index].img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>

        {/* Main Carousel Frame */}
        <div className="relative z-10 w-full h-full max-w-5xl bg-slate-950 backdrop-blur-md rounded-[3rem] border border-orange-300 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              className="w-full h-full flex flex-col md:flex-row"
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 flex items-center justify-center">
                <div className="relative w-full h-full overflow-hidden rounded-[2rem] shadow-2xl">
                   <img
                    src={slides[index].img}
                    alt={slides[index].title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-10 md:p-16 flex flex-col justify-center relative">
                <Quote className="absolute top-10 right-10 text-orange-500/10 w-32 h-32 -z-10" />
                
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4"
                >
                  {slides[index].title}
                </motion.span>

                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter"
                >
                   {slides[index].desc.length > 60 ? (
                     <span className="text-2xl md:text-4xl leading-relaxed italic text-slate-200">
                        "{slides[index].desc}"
                     </span>
                   ) : (
                     slides[index].desc
                   )}
                </motion.h3>

                <div className="mt-12 flex items-center gap-6">
                   <div className="h-[1px] w-12 bg-orange-500/50" />
                   <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">
                     Slide {index + 1} / {slides.length}
                   </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute bottom-10 right-10 flex gap-4 z-30">
            <button
              onClick={prevSlide}
              className="p-4 rounded-full bg-white/5 border border-white/5 text-white hover:bg-orange-500 transition-all active:scale-90"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 rounded-full bg-white/5 border border-white/5 text-white hover:bg-orange-500 transition-all active:scale-90"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar (Visual Indicator) */}
      <div className="max-w-5xl mx-auto mt-12 px-2 flex gap-1">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 flex-1 rounded-full cursor-pointer transition-all duration-500 ${
              i === index ? "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" : "bg-slate-950"
            }`}
          />
        ))}
      </div>
    </div>
  );
}