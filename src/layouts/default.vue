<template>
  <div>
    <div class="flex flex-col w-full">
      <nav class="text-xl mt-6 inline-flex gap-2 w-full flex-row-reverse px-3">
        <button class="icon-btn dark:i-carbon-moon i-carbon-sun" @click="toggleDark()" />
        <a href="https://github.com/bigsnowballhehe/Vue-Feat-List" class="icon-btn i-carbon-logo-github" target="_blank" />
        <a href="https://juejin.cn/user/2233851705851399" class="icon-btn i-tabler-brand-juejin" target="_blank" />
      </nav>
      <div class="flex">
        <SiderBar :router-items="pathList" />
        <div class="w-full ml-12 mt-6">
          <RouterView />
          <Demo />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import type { RouteRecordRaw } from 'vue-router'
import SiderBar from '~/components/SiderBar/index.vue'
import routes from '~pages'
import Demo from '~/components/demo.vue'
import { toggleDark } from '~/utils/index'

// sider管理

const localRoutes = routes.filter(router => router.name !== 'index').reverse()
const pathList = new Map<string, RouteRecordRaw[]>()

localRoutes.forEach((item) => {
  const { path } = item
  const pathIndex = path.split('/')
  pathIndex.shift()
  if (!pathList.has(pathIndex[0])) {
    pathList.set(pathIndex[0], new Array<RouteRecordRaw>(item))
  }
  else {
    pathList.get(pathIndex[0])?.push(item)
  }
})
</script>
