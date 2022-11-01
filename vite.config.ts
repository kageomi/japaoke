import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const config = {
    plugins: [react()]
  }
  if (command === 'build') {
    return {
      ...config,
      base: '/japaoke/'
    }
  }
  return config
})
