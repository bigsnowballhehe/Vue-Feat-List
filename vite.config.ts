import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { transformLazyShow } from 'v-lazy-show'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          nodeTransforms: [
            transformLazyShow, // <--- add this
          ],
        },
      },
    }),
    Pages({
      exclude: ['**/components/*.vue'],
    }),
    Layouts(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: true,
      vueTemplate: true,

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
  // esbuild: {
  //   drop: mode === 'production' ? ['console', 'debugger'] : [],
  // },
  test: {
    environment: 'jsdom',
  },
}))
