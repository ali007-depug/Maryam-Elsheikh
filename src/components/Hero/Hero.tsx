/**
 * REFACTOR: PREMIUM PRODUCTION HERO
 * 1. LAYOUT: Switched to a 1200px Grid for better balance between text and image.
 * 2. GLASSMORPHISM: Added backdrop-blur and thin borders to the Select and Buttons.
 * 3. DYNAMICS: Implemented a 'Double-Ring' pulse for the Hero Image.
 * 4. TYPOGRAPHY: Used high-contrast weights (Black vs Regular) to create hierarchy.
 */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Select } from "../ui/Select";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { Loader2, Download, ArrowUpRight, Sparkles } from "lucide-react";
import type { ComponentProps } from "../../types/ComponetTypes";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import HeroTextSkelton from "./HeroTextSkelton";
import { Button } from "../ui/button";
import scrollToSection from "../../actions/ScrollFunction";

interface HeroDataProps {
  description: string;
  heroImg: string;
  title?: string;
}

export default function Hero({
  portfolioType,
  handlePortfolioTypeChange,
}: ComponentProps) {
  const [heroData, setHeroData] = useState<HeroDataProps>({
    description: "",
    heroImg: "",
  });
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const getHeroData = async () => {
      setFetching(true);
      try {
        const q = query(
          collection(db, "portfolioType"),
          where("type", "==", portfolioType.toLowerCase()),
        );
        const snap = await getDocs(q);
        if (!snap.empty) {
          const pId = snap.docs[0].id;
          const hSnap = await getDocs(
            collection(db, "portfolioType", pId, "Hero"),
          );
          if (!hSnap.empty) {
            setHeroData(hSnap.docs[0].data() as HeroDataProps);
          }
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setFetching(false);
      }
    };
    getHeroData();
  }, [portfolioType]);

  return (
    <main
      id="hero"
      className={`relative w-full min-h-screen pt-20 flex items-center overflow-hidden transition-colors duration-700 ${
        portfolioType === "Chemical Engineer"
          ? "bg-slate-900 text-slate-100"
          : "bg-orange-950 text-orange-50"
      }`}
    >
      {/* BACKGROUND DECOR (NO COLOR CHANGE) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 -left-20 w-96 h-96 blur-[120px] rounded-full opacity-20 ${
            portfolioType === "Chemical Engineer"
              ? "bg-sky-500"
              : "bg-orange-600"
          }`}
        />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-8 items-center">
          {/* LEFT: CONTENT MODULE */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Sparkles size={14} className="text-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                Currently Active
              </span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-lg md:text-xl font-bold flex flex-wrap items-center gap-3"
              >
                Hello, I'm{" "}
                <span className="text-3xl md:text-5xl font-black tracking-tighter text-white">
                  Maryam Elsheikh
                </span>
              </motion.h1>

              <div className="flex items-center gap-3">
                <span className="text-lg font-medium opacity-60 italic">
                  Working as a
                </span>
                <Select
                  portfolioType={portfolioType}
                  handlePortfolioTypeChange={handlePortfolioTypeChange}
                />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`relative pl-8 border-l-2 ${portfolioType === "Chemical Engineer" ? "border-sky-700/80" : "border-orange-500/30"}`}
            >
              {fetching ? (
                <HeroTextSkelton />
              ) : (
                <div className="text-lg md:text-xl leading-relaxed text-slate-300 max-w-2xl font-medium prose prose-p:my-0 prose-invert prose-orange min-h-50">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {heroData.description}
                  </ReactMarkdown>
                </div>
              )}
            </motion.div>

            {/* ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex max-sm:flex-col w-fit mx-auto gap-4 pt-4"
            >
              <a
                href="#"
                className={`group relative px-8 py-4 ${portfolioType == "Chemical Engineer" ? "bg-sky-600" : "bg-orange-600"} rounded-2xl flex items-center gap-3 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-orange-950/40 overflow-hidden`}
              >
                <Download
                  size={18}
                  className="text-white group-hover:animate-bounce"
                />
                <span className="text-xs font-black uppercase tracking-widest text-white">
                  Download CV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>

              <Button
                variant={"ghost"}
                onClick={() => scrollToSection("works")}
                className=" p-7 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 hover:bg-white hover:text-black transition-all text-white backdrop-blur-sm cursor-pointer"
              >
                <span className="text-xs font-black uppercase tracking-widest">
                  Explore Work
                </span>
                <ArrowUpRight
                  size={18}
                  className={`${portfolioType == "Chemical Engineer" ? "text-sky-600" : "text-orange-600"}`}
                />
              </Button>
            </motion.div>
          </div>

          {/* RIGHT: VISUAL MODULE */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative group">
              {/* Dual Pulse Rings */}

              {/* Main Image Container */}
              <div
                className={`relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 border-4 border-white/10 bg-slate-950/50 backdrop-blur-xl shadow-2xl overflow-hidden ${portfolioType === "Chemical Engineer" ? "group-hover:border-sky-500/50" : "group-hover:border-orange-500/50"} transition-colors duration-500`}
              >
                {/* <AnimatePresence mode="wait"> */}
                {fetching ? (
                  <div
                    className={`absolute inset-0 flex items-center justify-center ${portfolioType === "Chemical Engineer" ? "bg-slate-900" : "bg-orange-900"} `}
                  >
                    <Loader2
                      size={32}
                      className={`animate-spin ${portfolioType === "Chemical Engineer" ? "text-sky-400" : "text-white"}`}
                    />
                  </div>
                ) : (
                  <motion.img
                    key={portfolioType}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    src={heroData.heroImg}
                    alt="Hero profile"
                    className="w-full h-full object-cover rounded-full"
                    loading="eager"
                    priority
                  />
                )}
                {/* </AnimatePresence> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
