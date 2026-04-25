import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  logLevel: 'error',
  plugins: [react(), sitemap({
    hostname: 'https://avihusitton.com',
    dynamicRoutes: [
      '/', '/about', '/contact', 
      '/therapy', '/couples', '/reservists-workshops',
      '/terms', '/privacy', '/accessibility'
    ]
  }), ViteImageOptimizer({
    jpg: { quality: 80 },
    png: { quality: 80 },
    webp: { lossless: false, quality: 80 }
  }), cloudflare()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});