import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Don't expose the dev server to the network by default.
    host: '127.0.0.1',
    strictPort: false,
  },
  build: {
    sourcemap: false, // avoid shipping source maps in the production build
    target: 'es2022',
  },
})
