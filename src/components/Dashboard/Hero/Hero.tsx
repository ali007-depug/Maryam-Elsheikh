/**
 * REFACTOR STRATEGY:
 * 1. THEME: Shifted from White/Slate to Deep Slate/Orange.
 * 2. GLOWS: Added subtle orange radial gradients to match the Header's "Activated" look.
 * 3. LAYOUT: Refined the cards into "Glass Modules" with border-white/5.
 */
import HeroContent from "./HeroContent";
import { Select } from "../../ui/Select";
import { LayoutDashboard } from "lucide-react";
import type { ComponentProps } from "../../../types/ComponetTypes";
import { useAuth } from "../../../context/Auth";

export default function HeroAdmin({
  portfolioType,
  handlePortfolioTypeChange,
}: ComponentProps) {
  const {isAdmin} = useAuth()
  return (
    <section className="max-w-10xl mx-auto p-4 relative top-20 md:p-10 space-y-8 bg-[#020617] min-h-screen text-slate-200">
      {/* --- TOP CONTROL PANEL --- */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-slate-900/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
        <div className="flex items-center gap-5">
          <div className="h-12 w-12 bg-orange-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20">
            <LayoutDashboard className="text-orange-500" size={24} />
          </div>
          <div>
            <h1 className="font-black text-2xl text-white tracking-tight">
              Hero Section{" "}
              <span className="text-orange-500 italic">Editor</span>
            </h1>
            <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-500 mt-1">
              Active Environment:{" "}
              <span className="text-slate-300">{portfolioType}</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-950/50 p-2 rounded-2xl border border-white/5">
          <Select
            portfolioType={portfolioType}
            handlePortfolioTypeChange={handlePortfolioTypeChange}
          />
        </div>
      </div>

      <HeroContent portfolioType={portfolioType} isAdmin={isAdmin} />
    </section>
  );
}
