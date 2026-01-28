import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  base: '/fps-arena/', // GitHub Pages base path
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
    open: false,
  },
});
