import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // This is essential for GitHub Pages to serve correctly under /plugtrail/
  base: "/plugtrail/",

  // Local dev server settings
  server: {
    host: "::",
    port: 8080,
  },

  // Plugins used
  plugins: [
    react(),
    mode === "development" && componentTagger(), // Only use tagger in dev mode
  ].filter(Boolean),

  // Module resolution aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Use @ to reference /src
    },
  },
}));
