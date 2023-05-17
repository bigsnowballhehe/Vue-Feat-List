<template>
  <nav class="text-xl mt-6 inline-flex gap-2">
    <button class="icon-btn" @click="toggleDark()">
      <div class="dark:i-carbon-moon i-carbon-sun" />
    </button>
    <a href="" class="icon-btn i-carbon-logo-github"></a>
  </nav>
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
import { toggleDark } from '~/utils/index'

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
