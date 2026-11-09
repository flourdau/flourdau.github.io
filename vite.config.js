import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    target: 'esnext',
    outDir: 'docs',
    emptyOutDir: true,
  },
  base: '/',
  plugins: [react()],
})
