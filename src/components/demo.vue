<template>
  <div class="my-8">
    <div>
      <button class="btn" @click="codeType = !codeType ">
        SourceCode
      </button>
    </div>
    <div v-lazy-show="codeType" class="source">
      <pre>
      <code>{{ curCode }}</code>
      </pre>
      <button class="btn" @click="usePlayGround(curCode)">
        Edit In Editor
      </button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useRoute } from 'vue-router'
import { utoa } from '~/utils'

// 展示逻辑
const codeType = ref(false)

// 模块导入
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

// 打开SFC Editor
function usePlayGround(code: string) {
  const obj = {
    'App.vue': code,
  }
  const url = `https://play.vuejs.org/#${utoa(JSON.stringify(obj))}`
  window.open(url, '_blank')
}
</script>
