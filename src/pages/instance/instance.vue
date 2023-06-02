<template>
  <div>
    <ForExpose
      ref="inst"
    />

    <button class="btn " @click="getNum">
      Click to trigger
    </button>
  </div>
</template>

<script setup lang='ts'>
import ForExpose from './components/for-expose.vue'
import type { ForExposeInstance } from './components/instype'

const inst = ref<ForExposeInstance>()
function getNum() {
  inst.value?.postNum()
}
</script>

 <route lang='json5'>
{
 "meta": {
 "title": "get instance"
 }
 }
 </route>
