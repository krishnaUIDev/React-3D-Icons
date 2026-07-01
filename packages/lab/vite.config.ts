import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    // Force resolving the peer dependencies from the root/monorepo packages to avoid duplicate instances of React or Three.js in runtime
    dedupe: ["react", "react-dom", "three", "@react-three/fiber", "@react-three/drei"]
  }
});
