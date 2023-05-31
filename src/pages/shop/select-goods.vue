<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div>
    <span>I am select goods</span>
    <div>
      <div v-for="[key, value] of curGoods">
        <span>{{ key }}</span>
        <div class="flex">
          <button
            v-for="item in value "
            class="m-2 bg-blue p-2"
            :class="{ 'bg-green': selected.get(key) === (item.value) }"
            :disabled="!enableList.get(key)?.has(item.value)"
            @click="handleClick(key, item.value)"
          >
            {{ item.text }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
type CurSec = 'color' | 'size' | 'style'
interface CurGoods {
  value: number
  text: string
}
const sku = {
  // 2 * 1 * 1: 1,
  2: 2,
  3: 1,
  5: 1,
  7: 2,
  11: 1,
  13: 2,
  // 3 * 5 : 1
  15: 1,
  // 2 * 7: 1
  14: 2,
  // 2 * 11: 1
  22: 1,
  // 2 * 13: 1
  26: 1,
  // 3 * 13: 1,
  39: 1,
  // 5 * 13: 1,
  65: 1,
  // 7 * 11 :1
  77: 1,
  // 7 * 13 : 1
  91: 1,
  // 2 * 7 * 11 :1
  154: 1,
  // 2 * 7 * 13 : 1
  182: 1,
  // 3 * 5 * 13:1
  195: 1,
}
const curGoods = new Map<CurSec, CurGoods[]>()
curGoods.set('color', [{ value: 2, text: 'red' }, { value: 3, text: 'blue' }])
curGoods.set('size', [{ value: 5, text: 'xl' }, { value: 7, text: 'xxl' }])
curGoods.set('style', [{ value: 11, text: 'new' }, { value: 13, text: 'old' }])
const enableList = ref(new Map<CurSec, Set<number>>())

const selected = ref(new Map<CurSec, number>())
function handleClick(key: CurSec, index: number) {
  if (selected.value.has(key) && selected.value.get(key) === index) {
    selected.value.delete(key)
    return
  }
  selected.value.set(key, index)
}

watch(selected.value, () => {
  enableList.value.clear()
  for (const [ikey, ivalue] of curGoods) {
    ivalue.forEach((pri) => {
      Object.keys(sku).some((str) => {
        let pris = 1
        for (const [skey, svalue] of selected.value) {
          if (skey !== ikey && svalue) {
            pris *= svalue
          }
        }
        if (Number(str) % (pris * pri.value) === 0) {
          if (Number(str) % pri.value === 0) {
            if (enableList.value.has(ikey)) {
              enableList.value.get(ikey)?.add(pri.value)
            }
            else {
              enableList.value.set(ikey, (new Set<number>()).add(pri.value))
            }
            return true
          }
          else {
            return false
          }
        }
        else {
          return false
        }
      })
    })
  }
}, { immediate: true })
</script>

<style>
:disabled{
  background-color: gray;
}
</style>

 <route lang='json5'>
{
 "meta": {
 "title": "Select Goods"
 }
}
 </route>
