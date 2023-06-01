<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup lang='ts'>
defineProps<{
  msg: string
}>()
function postNum() {
  return 'iam post'
}
defineOptions({
  name: 'ForTsx',
})
defineExpose({
  postNum,
})
console.log('I am for-tsx.vue')
</script>
