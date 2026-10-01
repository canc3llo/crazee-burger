import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000, // pour que l'appli se lance dans le port 3000 et plus 5173
    watch: {
      usePolling: true,
    },
  },
  plugins: [
    react(),
    checker({
      // affiche les erreurs ESLint dans un overlay du browser
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx}"',
        useFlatConfig: true,
      },
    }),
  ],
})
