import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,     // Set dev server port
    host: true      // Allow access from network (e.g., LAN or external IP)
  }
})
