<template>
  <div>
    <p>当 ref 作为响应式数组或像 Map 这种原生集合类型的元素被访问时，不会进行解包。但模板还是一如既往</p>
    <a class="border-1 " href="https://juejin.cn/post/7241492331953766461" target="_blank">Vue Reactive 自动解包？怎么弄的？</a>
    <div>
      <p>reactive</p>
      <p>{{ arrReac[0] }}</p>
      <p>ref</p>
      <p>{{ arrRef[0] }}</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
const arrReac = reactive([ref(1)])
const arrRef = ref([ref(1)])
</script>

 <route lang='json5'>
{
 "meta": {
 "title": "Array with reactive"
 }
 }
 </route>
