import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Set base to './' for relative paths
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
