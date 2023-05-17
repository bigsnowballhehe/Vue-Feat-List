<template>
  <div>
    <button class="cursor-pointer" @click="usePlayGround(props.sourceCode)">
      Edit
    </button>
    <pre>
      <code>{{ sourceCode }}</code>
    </pre>
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
