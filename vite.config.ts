import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Vue()],
  build: {
    // Output compiled files to /dist.
    outDir: "./dist",
    lib: {
      // Set the entry point (file that contains our components exported).
      entry: resolve(__dirname, "src/index.ts"),
      // Name of the library.
      name: "my-component-library",
      // We are building for CJS and ESM, use a function to rename automatically files.
      // Example: my-component-library.esm.js
      fileName: (format) => `${"my-component-library"}.${format}.js`,
    },
    rollupOptions: {
      // Vue is provided by the parent project, don't compile Vue source-code inside our library.
      external: ["vue"],
      output: { globals: { vue: "Vue" } },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
