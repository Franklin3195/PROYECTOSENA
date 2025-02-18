import EnvironmentPlugin from 'vite-plugin-environment'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), EnvironmentPlugin('all')],
  server: {
    host: true,
    port: 5072
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
