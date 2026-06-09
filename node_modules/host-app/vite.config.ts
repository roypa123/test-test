import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",

      remotes: {
        products: "http://localhost:5001/assets/remoteEntry.js",
        users: "http://localhost:5002/assets/remoteEntry.js",
        sharedui: "http://localhost:5003/assets/remoteEntry.js",
      },

      shared: ["react", "react-dom"],
    }),

  ],

  resolve: {
    alias: {
      "@/shared-ui": path.resolve(__dirname, "../shared-ui/src/index.ts"),
    },
  },

  server: {
    port: 5000,
  },

  build: {
    target: "esnext",
  },
})
