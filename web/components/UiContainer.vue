<template>
  <Component
    :is="as || 'div'"
    class="px-4 md:px-8 max-w-screen-xl mx-auto">
    <slot />
  </Component>
</template>

<script setup lang="ts">
  defineProps<{
    as?: string
  }>()
</script>
