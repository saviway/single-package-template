const path = require('path')
import {defineConfig} from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts({outputDir: './dist', insertTypesEntry: true})],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'index'
    }
  }})
