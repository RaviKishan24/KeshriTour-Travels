import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // 👈 This is key for Netlify or GitHub Pages
  plugins: [react()],
})
