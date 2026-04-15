import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import { Select } from "./ui/Select";
import { ChevronLeft, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

interface floatingSelectProp {
  handlePortfolioType: (e: ChangeEvent<HTMLSelectElement>) => void;
  portfolioType: "Chemical Engineer" | "Content Writer";
}

export default function SideSelect({
  handlePortfolioType,
  portfolioType,
}: floatingSelectProp) {
  const [isVisible, setIsVisible] = useState(false); // Controls if the tab is on screen
  const [isOpen, setIsOpen] = useState(false); // Controls if the select is expanded

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only show the "Tab" after scrolling down 500px
      if (currentScrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); // Auto-close if user scrolls back to top
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-0 bottom-20 z-[99] flex items-center">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: 100, }}
            animate={{ x: isOpen ? 0 : 170 }} // Peeks out slightly or fully opens
            exit={{ x: 100 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="flex items-center shadow-2xl"
          >
            {/* THE TRIGGER ARROW / CLOSE BUTTON */}
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-l-xl border-y border-l border-white/10 backdrop-blur-md cursor-pointer transition-colors ${
                isOpen ? "bg-orange-700 text-white" : "bg-black text-orange-500"
              }`}
            >
              {isOpen ? <X size={18} /> : <ChevronLeft size={20} />}
            </Button>

            {/* THE CONTENT PANEL */}
            <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-3 pr-5 flex items-center gap-3 shadow-2xl">
              <div className="scale-90 origin-right">
                <Select
                  portfolioType={portfolioType}
                  handlePortfolioTypeChange={handlePortfolioType}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}