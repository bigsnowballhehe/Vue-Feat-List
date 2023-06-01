<template>
  <div class="w-60 mr-8">
    <span>SiderBar</span>

    <div>
      <ul>
        <li v-for="[key, value] in routerItems" :key="key">
          <span class="font-bold">{{ `${key}:` }}</span>
          <ul>
            <li v-for="item in value" :key="item.name" class="cursor-pointer p-2" @click="$router.push(item.path)">
              {{ item.meta?.title }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
import type { RouteRecordRaw } from 'vue-router'
defineProps<{
  routerItems: Map<string, RouteRecordRaw[]>
}>()
</script>
