import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [
    vue(),
    Pages(),
    Layouts(),
    UnoCSS({
      presets: [presetUno()],
    }),
    AutoImport({
      imports: ['vue'],
      dts: true,
      vueTemplate: true,
      cache: true,
    }),
  ],
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    port: 3000,
  },
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
  test: {
    environment: 'jsdom',
  },
}))
