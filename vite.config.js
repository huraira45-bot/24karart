import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/wp-content/plugins/react-landing-page/dist/',
  build: {
    outDir: 'C:/Users/ServerDeskop/Local Sites/24-karat-bakery/app/public/wp-content/plugins/react-landing-page/dist',
    emptyOutDir: true,
  }
})
