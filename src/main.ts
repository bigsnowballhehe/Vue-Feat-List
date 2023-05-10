import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import 'uno.css'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory(),
  routes,
})
console.log(routes)
createApp(App).use(router).mount('#app')
