import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import 'uno.css'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)
// if (import.meta.env.VITE_GITHUB) {
//   routes.forEach((route) => {
//     route.path = `/vueapi${route.path}`
//   })
// }
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
console.log(routes)
createApp(App).use(router).mount('#app')
