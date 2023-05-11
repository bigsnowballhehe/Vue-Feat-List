<template>
  <div>
    <props />
    <span>define props</span>
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<script setup lang='ts'>
import props from './components/props.vue'
import propsStr from './components/props.vue?raw'
const code = ref(propsStr)
</script>

<route lang="yaml">
meta:
  title: props
</route>
