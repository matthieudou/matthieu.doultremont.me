<template>
  <button class="group relative rounded-lg overflow-hidden focus-visible:outline-none focus-visible:ring">
    <img
      v-bind="urlFor(shot.image, options)"
      :alt="shot.title"
      loading="lazy"
      class="w-full h-full object-cover">
    <div class="opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100 transition absolute bottom-0 text-white rounded bg-black/10 px-4 py-1 m-2 backdrop-blur-sm ring ring-white/10 ring-1">
      {{ shot.title }}
    </div>
  </button>
</template>

<script setup lang="ts">
  import { ImageUrlBuilderOptionsWithAliases } from '@sanity/image-url/lib/types/types'
  import { Shot } from '~/services/sanityGallery'

  const props = defineProps<{
    shot: Shot,
    options: ImageUrlBuilderOptionsWithAliases
  }>()

  const urlFor = useSanityUrlFor()

</script>
