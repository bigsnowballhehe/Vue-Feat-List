<template>
  <div>
    <pre>
      <code>{{ sourceCode }}</code>
    </pre>
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

function usePlayGround(code: string) {
  const obj = {
    'App.vue': code,
  }
  const url = `https://play.vuejs.org/#${utoa(JSON.stringify(obj))}`
  window.open(url, '_blank')
}
</script>
