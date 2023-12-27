import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dist",
  },
  base: process.env.NODE_ENV === "production" ? "/petslove-react-vite/" : "/",
  plugins: [react()],
});
