import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './app'),
      '@entities': path.resolve(__dirname, './entities'), 
      '@features': path.resolve(__dirname, './features'), 
      '@pages': path.resolve(__dirname, './pages'), 
      '@shared': path.resolve(__dirname, './src'), 
      '@widgets': path.resolve(__dirname, './widgets'), 
      '@styles': path.resolve(__dirname, './shared/styles'),
      '@ui': path.resolve(__dirname, './shared/ui'),
    },
  },
})
