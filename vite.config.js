import { defineConfig } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/social-media-dashboard/",
  resolve: {
    alias: {
      '@images': resolve(__dirname, 'src/images'),
      '@styles': resolve(__dirname, 'src/styles'),
    },
  },
})