<template>
  <div>
    <div class="flex flex-col w-full">
      <nav class="text-xl mt-6 inline-flex gap-2 w-full flex-row-reverse px-3">
        <button class="icon-btn" @click="toggleDark()">
          <div class="dark:i-carbon-moon i-carbon-sun" />
        </button>
        <a href="" class="icon-btn i-carbon-logo-github" />
      </nav>
      <div class="flex">
        <SiderBar :router-items="pathList" />
        <div>
          <div class="my-6">
            <RouterView />
          </div>
          <button />
          <Demo :source-code="curCode || ''" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useRoute } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import SiderBar from '~/components/SiderBar/index.vue'
import routes from '~pages'
import Demo from '~/components/Demo/index.vue'
import { toggleDark } from '~/utils/index'

// sider管理
const localRoutes = routes.filter(router => router.name !== 'index')
const pathList = new Map<string, Set<RouteRecordRaw>>()
localRoutes.forEach((item) => {
  const { path } = item
  const pathIndex = path.split('/')
  pathIndex.shift()
  if (!pathList.has(pathIndex[0])) {
    pathList.set(pathIndex[0], (new Set<RouteRecordRaw>()).add(item))
  }
  else {
    pathList.get(pathIndex[0])?.add(item)
  }
})

// 模块引入部分
const curRoutes = useRoute()
const curCode = ref('')
const modules = import.meta.glob('../pages/**/*.vue', { as: 'raw', eager: true })
const lowModules = new Map()
for (const path in modules) {
  lowModules.set(path.toLowerCase(), modules[path])
}
function getModKey() {
  const pathIndex = curRoutes.path.split('/')
  pathIndex.shift()
  const modKey = `../pages/${pathIndex[0]}/${pathIndex[1]}.vue`
  return modKey
}
watch(() => curRoutes.path, async () => {
  const modKey = getModKey()
  if (lowModules.has(modKey)) {
    curCode.value = lowModules.get(modKey)
  }
}, { immediate: true })
</script>
