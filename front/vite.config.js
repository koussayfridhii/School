import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  resolve: {
    alias: {
      "@": "/source", // This will point '@' to the source folder
    },
  },
  server: {
    port: 3000, // Frontend runs here
    proxy: {
      "/api": {
        target: "http://localhost:5000", // Backend API
        changeOrigin: true,
        secure: false,
      },
    },
    watch: {
      usePolling: true,
    },
  },
  assetsInclude: ["**/*.glb"], // Allow importing .glb files
});
