<template>
  <div class="w-60 border-light-300 border-solid ">
    <div>SiderBar</div>
    <div>
      <ul>
        <li
          v-for="route in localRoutes"
          :key="route.name"
          class="cursor-pointer p-2"
          @click="$router.push(route.path)"
        >
          {{ route?.meta?.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
import routes from '~pages'
const localRoutes = routes.filter(route => route.name !== 'index')
</script>
