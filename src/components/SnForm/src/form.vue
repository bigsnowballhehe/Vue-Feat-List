<template>
  <div>
    <input type="text" :value="inputOne">
    <slot name="label" msg="iname" />
    <slot />
  </div>
</template>

<script setup lang='ts'>
defineProps<{
  inputOne: string
}>()
defineEmits<{
  (e: 'update:inputOne'): void
}>()
defineSlots<{
  default(prop: {}): any
  label?: (props: { msg: string }) => any
}>()
</script>
