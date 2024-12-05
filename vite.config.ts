import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { resolve } from 'path'

import fg from 'fast-glob'

const entries = fg
  .sync('./**/*.html', {
    cwd: __dirname,
    ignore: ['./node_modules/**', './dist/**'],
  })
  .map((entry) => resolve(__dirname, entry))

export default defineConfig({
  base: '/',
  server: {
    port: 3001,
  },
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      'remesh-domains-for-demos/dist': resolve(__dirname, './domains/src'),
    },
  },
  build: {
    sourcemap: true,
    outDir: resolve(__dirname, '../../dist/react'),
    rollupOptions: {
      input: entries,
    },
  },
})
