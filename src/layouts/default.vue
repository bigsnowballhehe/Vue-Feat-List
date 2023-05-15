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

function getModKey() {
  const pathIndex = routes.path.split('/')
  const pathArr = pathIndex.map((item: string) => {
    return item[0].toUpperCase() + item.slice(1)
  })
  const modKey = `../pages/${pathArr[0]}/${pathArr[1]}.vue`
  return modKey
}

watch(() => routes.path, async () => {
  const modKey = getModKey()
  if (Object.hasOwnProperty.call(modules, modKey)) {
    curCode.value = await modules[modKey]()
  }
}, { immediate: true })
</script>
