<template>
  <div>
    <span>Children's Input </span>
    <SnView v-model:input-one="inputVal">
      <span>Input: </span>
    </SnView>
    <span>{{ `parent's val: ${inputVal}` }}</span>
  </div>
</template>

<script setup lang='ts'>
import SnView from './components/model-com.vue'
const inputVal = ref('')
</script>

<route lang="json5">
  {
    "meta": {
      "title": "V-model in components"
    }
  }
</route>
