import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import topLevelAwait from 'vite-plugin-top-level-await'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: '5555',
    proxy: {
      '/api': {
        target: 'http://152.136.185.210:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  compilerOptions: {
    types: ['node']
  },
  plugins: [
    vue(),
    topLevelAwait({
      promiseExportName: '__tla',
      promiseImportName: (i) => `__tla_${i}`
    })
  ]
})
