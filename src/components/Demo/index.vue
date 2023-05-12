<template>
  <div>
    <div v-html="parseCode" />
    <button class="cursor-pointer" @click="usePlayGround(props.sourceCode)">
      edit in SFC
    </button>
  </div>
</template>

<script setup lang='ts'>
import { getHighlighter } from 'shiki'
import { utoa } from '~/utils'
const props = defineProps<{
  sourceCode: string
}>()
const parseCode = ref('')

watch(() => props.sourceCode, async () => {
  const ter = await getHighlighter({ })
  console.log(ter)
})
function usePlayGround(code: string) {
  const obj = {
    'App.vue': code,
  }
  const url = `https://play.vuejs.org/#${utoa(JSON.stringify(obj))}`
  window.open(url, '_blank')
}
</script>
