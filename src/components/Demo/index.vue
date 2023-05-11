<template>
  <div>
    <pre>
      <code>{{ sourceCode }}</code>
    </pre>
    <span @click="usePlayGround($props.sourceCode)">edit in SFC</span>
  </div>
</template>

<script setup lang='ts'>
defineProps<{
  sourceCode: string
}>()

function usePlayGround(code: string) {
  const url = `https://play.vuejs.org/#${encodeURIComponent(code)}`
  window.open(url, '_blank')
}
</script>
<!--
    luyo
1 在每个组件里直接引用然后传递进去,全部遍历一遍,然后都有,显示,但是这样子和路由就不相关了
 我要的效果,组件按照路由来,那么就每个组件,就只展示自己的内容,但是在layout里就可以
 layout怎么接收?
 -->
