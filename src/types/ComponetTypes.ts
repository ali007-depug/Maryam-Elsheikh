import { type ChangeEvent } from "react";
export interface ComponentProps{
      portfolioType: "Chemical Engineer" | "Content Writer";
      handlePortfolioTypeChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    
}