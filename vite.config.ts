import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const config = {
    plugins: [react(), tsconfigPaths(), EnvironmentPlugin('all')],
  };
  if (command === 'build') {
    return {
      ...config,
      base: '/japaoke/#',
    };
  }
  return config;
});
