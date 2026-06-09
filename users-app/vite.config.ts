import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "users",
      filename: "remoteEntry.js",

      exposes: {
        "./UsersPage": "./src/UsersPage.tsx",
      },

      shared: ["react", "react-dom"],
    }),

  ],

  build: {
    target: "esnext",
  },

  server: {
    port: 5002,
  },

  preview: {
    port: 5002,
  },
})
