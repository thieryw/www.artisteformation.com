
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'
import { resolve } from "path";



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy({
      "targets": ['defaults', 'not IE 11'],
    })
  ],
  "resolve": {
    "alias": {
      "@": resolve(__dirname, "src")
    }

  },
  "base": "/",
  "server": {
    "host": true
  }
})

