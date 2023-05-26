<template>
  <div>
    <div>
      <button class="btn mr-2" @click="codeType.source = !codeType.source">
        SourceCode
      </button>
      <button class="btn" @click="codeType.compile = !codeType.compile">
        Compile
      </button>
    </div>
    <div v-lazy-show="codeType.source" class="source">
      <button class="cursor-pointer" @click="usePlayGround(props.sourceCode)">
        Edit
      </button>
      <pre>
      <code>{{ sourceCode }}</code>
      </pre>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { utoa } from '~/utils'

const props = defineProps<{
  sourceCode: string
}>()
function usePlayGround(code: string) {
  const obj = {
    'App.vue': code,
  }
  const url = `https://play.vuejs.org/#${utoa(JSON.stringify(obj))}`
  window.open(url, '_blank')
}

// 展示部分逻辑
interface CodeType {
  source: boolean
  compile: boolean
}
const codeType = reactive<CodeType>({
  source: true,
  compile: false,
})
</script>
