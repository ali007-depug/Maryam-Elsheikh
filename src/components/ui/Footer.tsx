import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full h-fit py-5 px-6 border-t border-white/5 bg-slate-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-evenly items-center gap-8">
        {/* LEFT: BRANDING & COPYRIGHT */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">
              Ali Abd Elbagi
            </span>
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
            © {currentYear} — All Rights Reserved
          </p>
        </div>

        {/* CENTER: THE "BUILT BY" MARKETING TAG */}
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.div
              whileHover={{ y: -2 }}
              className="group relative px-6 py-3 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm cursor-pointer transition-all hover:border-orange-500/30"
            >
              <a
                href="https://ali-abd-elbagi-v2.vercel.app/en-US"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-medium text-slate-400"
              >
                Designed & Engineered by{" "}
                <span className="text-white font-bold group-hover:text-orange-500 transition-colors">
                  Ali
                </span>
              </a>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-orange-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl -z-10" />
            </motion.div>
          </TooltipTrigger>

          <TooltipContent
            side="top"
            sideOffset={15}
            className="bg-slate-900 z-[999] border-white/10 p-2 rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-200"
          >
            <div className="flex items-center gap-3 min-w-[170px]">
              {/* Profile Image */}
              <a
                href="https://ali-abd-elbagi-v2.vercel.app/en-US"
                className="w-10 h-10 rounded-xl overflow-hidden border border-orange-500/50"
              >
                <img
                  src="/ali.webp"
                  alt="Ali Abd Elbagi"
                  className="w-full h-full object-cover"
                />
              </a>

              {/* Branding Text */}
              <div className="flex flex-col">
                <a
                  href="https://ali-abd-elbagi-v2.vercel.app/en-US"
                  target="_blank"
                  className="text-[10px] font-black underline text-white uppercase tracking-tighter"
                >
                  Ali Abd Elbagi
                </a>
                <span className="text-[8px] font-bold text-orange-500 uppercase tracking-widest">
                  Software Engineer
                </span>
              </div>
            </div>

            {/* Radix Tooltip Arrow */}
            <div className="fill-slate-900" />
          </TooltipContent>
        </Tooltip>
      </div>
    </footer>
  );
}
