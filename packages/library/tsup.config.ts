import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  splitting: true,
  treeshake: true,
  dts: true,
  clean: true,
  minify: true,
  sourcemap: true,
  external: ["react", "react-dom", "three", "@react-three/fiber", "@react-three/drei"],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";' // Add "use client" directive for Next.js app router compatibility
    };
  }
});
