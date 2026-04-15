import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import { TooltipProvider } from "./components/ui/tooltip.tsx";
import { Toaster } from "./components/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <HashRouter>
        <TooltipProvider>
        <App />
        <Toaster richColors position="bottom-left"/>
        </TooltipProvider>
      </HashRouter>
  </StrictMode>,
);
