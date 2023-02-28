import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  resolve: {
    alias: [
      { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'model', replacement: path.resolve(__dirname, 'src/model') }
    ],
    
  },
})
