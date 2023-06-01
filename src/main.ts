import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import 'uno.css'
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'

generatedRoutes.forEach((route) => {
  if (route.path === '/') {
    route.redirect = '/macros/props'
  }
})
const routes = setupLayouts(generatedRoutes)
console.log(routes)
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
