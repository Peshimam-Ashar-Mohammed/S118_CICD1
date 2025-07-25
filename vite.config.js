// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/S118_CICD1/', // 👈 this is the key!
  plugins: [react()],
})
