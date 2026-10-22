import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

const entry = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: entry('./index.html'),
        contact: entry('./contact/index.html'),
        providers: entry('./providers/index.html'),
        privacy: entry('./privacy/index.html'),
        privacyNotice: entry('./privacy-notice/index.html'),
        terms: entry('./terms/index.html'),
      },
    },
  },
})
