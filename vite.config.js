import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from 'node:url';

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  transpileDependencies: true,
  ...(isProduction
    ? {
      base: "https://storage.googleapis.com/wynton-site",
      build: {
        assetsDir: "assets",
        outDir: "dist"
      }
    }
    : {})
});