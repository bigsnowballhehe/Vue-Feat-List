<template>
  <div>
    <div class="w-128" v-html="parseCode" />
    <button class="cursor-pointer" @click="usePlayGround(props.sourceCode)">
      edit in SFC
    </button>
  </div>
</template>

<script setup lang='ts'>
import { utoa } from '~/utils'

const props = defineProps<{
  sourceCode: string
}>()

const parseCode = ref('')

watch(() => props.sourceCode, async () => {
  window.shiki
    .getHighlighter({
      theme: 'nord',
    })
    .then((highlighter: any) => {
      parseCode.value = highlighter.codeToHtml(props.sourceCode, { lang: 'js' })
    })
})

function usePlayGround(code: string) {
  const obj = {
    'App.vue': code,
  }
  const url = `https://play.vuejs.org/#${utoa(JSON.stringify(obj))}`
  window.open(url, '_blank')
}
</script>
