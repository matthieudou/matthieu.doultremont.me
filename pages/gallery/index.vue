<template>
  <div class="flex items-center justify-center">
    <img
      loading="lazy"
      :src="getUrl('/q_80/images/pano.jpg')">
  </div>
</template>

<script setup lang="ts">
  const getUrl = (path: string): string => {
    return '/api/image' + path
  }
</script>
