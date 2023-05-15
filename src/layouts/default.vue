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

const routes = useRoute()
const modules = import.meta.glob('../pages/**/*.vue', { as: 'raw' })
const lowModules = new Map()
for (const path in modules) {
  lowModules.set(path.toLowerCase(), modules[path])
}
function getModKey() {
  const pathIndex = routes.path.split('/')
  pathIndex.shift()
  const modKey = `../pages/${pathIndex[0]}/${pathIndex[1]}.vue`
  return modKey
}
watch(() => routes.path, async () => {
  const modKey = getModKey()
  if (lowModules.has(modKey)) {
    curCode.value = await lowModules.get(modKey)()
  }
}, { immediate: true })
</script>
