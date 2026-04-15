import { ArrowDown } from "lucide-react";
import type { ComponentProps } from "../../types/ComponetTypes";
export function Select({
  handlePortfolioTypeChange,
  portfolioType,
}: ComponentProps) {
  return (
    <div className="relative inline-block group">
      <select
        onChange={handlePortfolioTypeChange}
        value={portfolioType}
        className={`appearance-none  border border-white/10 ${portfolioType === "Chemical Engineer" ? `text-white  bg-slate-950 focus:ring-white-500/50` : `text-orange-500  focus:ring-orange-500/50 bg-white/5`} font-black uppercase tracking-[0.2em] text-[10px] px-6 py-2 rounded-xl focus:outline-none focus:ring-2 cursor-pointer hover:bg-white/5 transition-all pr-10`}
      >
        <option value="Chemical Engineer" className="bg-slate-900">
          Chemical Engineer
        </option>
        <option value="Content Writer" className="bg-slate-900">
          Content Writer
        </option>
      </select>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white group-hover:translate-y-[-40%] transition-transform">
        <ArrowDown size={12} />
      </div>
    </div>
  );
}
