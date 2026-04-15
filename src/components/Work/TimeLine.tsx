import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import WorkSkeleton from "./WorkSkelton";

interface Experience {
  role: string;
  company: string;
  date: string;
  description: string;
  src: string;
}

export default function Timeline({
  portfolioType,
}: {
  portfolioType: "Chemical Engineer" | "Content Writer";
}) {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(false);

  const isChemical = portfolioType === "Chemical Engineer";
  const theme = {
    accent: isChemical ? "text-sky-400" : "text-orange-500",
    dotBorder: isChemical ? "border-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.3)]" : "border-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.3)]",
  };

  useEffect(() => {
    async function getWorkData() {
      setLoading(true);
      try {
        const q = query(
          collection(db, "portfolioType"),
          where("type", "==", portfolioType.toLowerCase()),
        );
        const snap = await getDocs(q);
        if (!snap.empty) {
          const pId = snap.docs[0].id;
          const wSnap = await getDocs(
            collection(db, "portfolioType", pId, "work"),
          );
          if (!wSnap.empty) {
            setExperiences(wSnap.docs[0].data().experience || []);
          }
        }
      } catch (e) {
        console.error("Timeline Fetch Error:", e);
      } finally {
        setLoading(false);
      }
    }
    getWorkData();
  }, [portfolioType]);

  return (
    <div className="relative space-y-8">
      {/* Thinner, cleaner vertical line */}
      <div className="absolute left-4 lg:left-10 top-0 h-full w-[1px] bg-white/5" />

      {loading ? (
        <WorkSkeleton />
      ) : (
        experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-12 lg:pl-24 group"
          >
            {/* Smaller, more refined indicator */}
            <div
              className={`absolute left-[13px] lg:left-[37px] top-7 w-2.5 h-2.5 rounded-full bg-slate-950 border-2 z-20 transition-all duration-300 group-hover:scale-125 ${theme.dotBorder}`}
            />

            <div className="bg-white/[0.03] border border-white/5 rounded-[1.5rem] p-6 lg:p-8 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300">
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                
                {/* Scaled down Logo Container */}
                <div className="h-16 w-16 shrink-0 bg-slate-950 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner overflow-hidden">
                  {exp.src ? (
                    <img
                      src={exp.src}
                      alt={exp.company}
                      className="h-8 w-8 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <Briefcase className="text-slate-700" size={24} />
                  )}
                </div>

                <div className="flex-1 space-y-3 w-full">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
                    <div>
                      {/* Reduced Font Sizes */}
                      <h3 className="text-xl font-bold text-white tracking-tight leading-tight">
                        {exp.role}
                      </h3>
                      <p className={`font-bold text-xs uppercase tracking-widest mt-1 ${theme.accent}`}>
                        {exp.company}
                      </p>
                    </div>

                    {/* Smaller Date Pill */}
                    <div className="flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded-full border border-white/5">
                      <Calendar size={10} className={theme.accent} />
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                        {exp.date}
                      </span>
                    </div>
                  </div>

                  {/* Refined Description text */}
                  <p className="text-slate-400 text-sm leading-relaxed max-w-3xl border-l border-white/10 pl-4 py-0.5">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
}