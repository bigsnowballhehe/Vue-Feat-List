<template>
  <div class="flex">
    <SiderBar />
    <RouterView />
    <Demo :source-code="curCode || ''" />
  </div>
</template>

<script setup lang='ts'>
import { useRoute } from 'vue-router'
import SiderBar from '~/components/SiderBar/index.vue'
import Demo from '~/components/Demo/index.vue'
const curCode = ref('')

console.log('I am marcros props.vue')
const routes = useRoute()
const modules = import.meta.glob('../pages/**/*.vue', { as: 'raw' })
console.log(routes.name)
modules[`../pages${routes.path?.toString()}.vue`]().then((arg) => {
  console.log(arg)
  curCode.value = arg
})
// for (const path in modules) {
//   modules[path]().then((mod) => {
//     console.log(path, typeof path)
//   })
// }
// console.log(modules['../pages/index.vue'])
console.log(typeof routes.name)
</script>
