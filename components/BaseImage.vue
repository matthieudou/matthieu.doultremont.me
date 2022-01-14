<template>
  <img
    :src="computedSrc"
    :loading="loading">
</template>

<script setup lang="ts">
  defineProps<{
    src: string
    ratio: number
    loading: HTMLImageElement['loading']
  }>()

  const computedSrc = computed(() => {
    return ''
  })
</script>
