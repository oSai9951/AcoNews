import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
   
    proxy: {
      '/news': {
        target: 'http://localhost:3000', 
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/news/, ''),
      },
    },
  },
})
