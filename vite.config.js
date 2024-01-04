import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 7000,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    manifest: true,
    minify: 'terser',
    sourcemap: false,
    target: 'modules',
    cssCodeSplit: true,
  },
});
