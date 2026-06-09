import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "products",
      filename: "remoteEntry.js",

      exposes: {
        "./ProductsPage": "./src/ProductsPage.tsx",
      },

      shared: ["react", "react-dom"],
    }),
  ],

  build: {
    target: "esnext",
  },

  server: {
    port: 5001,
  },

  preview: {
    port: 5001,
  },
})
