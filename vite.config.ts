import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const config = {
    plugins: [react(), tsconfigPaths()]
  }
  if (command === 'build') {
    return {
      ...config,
      base: '/japaoke/'
    }
  }
  return config
})
