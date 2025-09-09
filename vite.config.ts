import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { luvethaTagger } from "./vite.plugins.luvetha.ts"; // ✅ Your new plugin

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && luvethaTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
