<template>
  <div class="max-w-screen-lg mx-auto py-32 px-8 text-white">
    <h1 class="text-5xl font-black">
      Gallery
    </h1>
    <GalleryDisplay class="mt-20" />
  </div>
</template>

<script setup lang="ts">
  import GalleryDisplay from '~/domains/gallery/components/GalleryDisplay.vue'
  usePageTitle('Gallery')
  const getUrl = (path: string): string => {
    return '/api/image' + path
  }
</script>
