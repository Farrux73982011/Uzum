import { defineConfig } from 'vite';

export default defineConfig({
//   base: '',
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
