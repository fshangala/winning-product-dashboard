import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import fs from 'fs';
import path from 'path';

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env':process.env
  }
  /*server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname,'C:\\Users\\fshan\\localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname,'C:\\Users\\fshan\\localhost.pem')),
    },
    host: '0.0.0.0'
  }
  server:{
    proxy: {
      '/tiktok-ads-api': {
        target: 'https://open.tiktokapis.com',
        changeOrigin: true,
        rewrite: (path)=>path.replace(/^\/tiktok-ads-api/,"")
      }
    }
  },*/
})
