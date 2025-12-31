import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Claude-todo-app-Project/', // ← Harus sesuai nama repo!
  plugins: [react()],
})
