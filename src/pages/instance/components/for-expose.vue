<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup lang='ts'>
const msg = ref(0)

function postNum() {
  msg.value++
}
defineOptions({
  name: 'ForTsx',
})
defineExpose({
  postNum,
})
console.log('I am for-tsx.vue')
</script>
