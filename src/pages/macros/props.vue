<template>
  <div>
    <SnView v-model:input-one="inputVal">
      <span>Input: </span>
    </SnView>
  </div>
  <div />
</template>

<script setup lang='ts'>
import SnView from './components/ModelCom.vue'

const inputVal = ref('')
console.log(SnView)
watch(inputVal, () => {
  console.log(inputVal.value)
})
</script>

<route lang="json5">
  {
    "meta": {
      "title": "Props"
    }
  }
</route>
