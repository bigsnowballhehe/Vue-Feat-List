<template>
  <div>
    <slot />
    <input type="text" :value="inputOne" @input="emits('update:inputOne', (($event.target)as HTMLInputElement).value)">
  </div>
</template>

<script setup lang='ts'>
defineProps<{
  inputOne: string
}>()
const emits = defineEmits<{
  (e: 'update:inputOne', value: string): void
}>()
</script>

<route lang="json5">
  {
    "meta": {
      "title": "Props"
    }
  }
</route>
