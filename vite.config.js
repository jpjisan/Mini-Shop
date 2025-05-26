import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Mini-Shop/', // Add this line
  plugins: [tailwindcss(), react()],
})