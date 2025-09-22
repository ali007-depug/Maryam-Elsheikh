import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";


// https://vite.dev/config/
export default defineConfig({
  // base:"/Maryam-Elsheikh/"
  plugins: [react(), tailwindcss(),
    // visualizer({
    //   open: true, // Automatically opens the report in browser
    //   gzipSize: true, // Shows gzip-size
    //   brotliSize: true, // Shows brotli-size
    //   filename: 'bundle-analysis.html' // Output filename
    // })
  ],

});
