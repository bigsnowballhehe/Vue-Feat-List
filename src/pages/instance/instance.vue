<template>
  <div>
    <ForExpose
      ref="inst"
      msg="test"
    />
    <span>{{ val }}</span>
  </div>
</template>

<script setup lang='ts'>
import ForExpose from './components/for-expose.vue'
import type { ForExposeInstance } from './components/instype'

const inst = ref<ForExposeInstance>()
const val = inst.value?.postNum()
</script>

 <route lang='json5'>
{
 "meta": {
 "title": "get instance"
 }
 }
 </route>
