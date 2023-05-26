<template>
  <div>
    <SnForm v-model:input-one="inputVal">
      <template #label="para">
        {{ para.msg }}
      </template>
    </SnForm>
  </div>
  <div />
</template>

<script setup lang='ts'>
import SnForm from './form.vue'
const inputVal = ref('')
console.log('I am form-item.vue')
</script>
