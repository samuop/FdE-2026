import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base` debe coincidir con el nombre del repo para que GitHub Pages
// resuelva bien las rutas de los assets: https://samuop.github.io/FdE-2026/
export default defineConfig({
  base: '/FdE-2026/',
  plugins: [react()],
})
