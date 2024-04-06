import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: './build',
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src', 'app'),
      assets: path.resolve(__dirname, 'src', 'assets'),
      entities: path.resolve(__dirname, 'src', 'entities'),
      features: path.resolve(__dirname, 'src', 'features'),
      layouts: path.resolve(__dirname, 'src', 'layouts'),
      pages: path.resolve(__dirname, 'src', 'pages'),
      processes: path.resolve(__dirname, 'src', 'processes'),
      shared: path.resolve(__dirname, 'src', 'shared'),
      widgets: path.resolve(__dirname, 'src', 'widgets'),
    },
  },
  plugins: [svgr(), react()],
})
