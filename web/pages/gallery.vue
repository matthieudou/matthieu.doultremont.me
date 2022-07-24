<template>
  <main>
    <UiContainer class="py-16 md:py-32">
      <UiTitle
        as="h1"
        class="dark:text-white">
        Gallery
      </UiTitle>

      <SanityGallery
        class="mt-16"
        :columns="numberOfColumns"
        :shots="data" />
    </UiContainer>

    <LayoutFooter />
  </main>
</template>

<script setup lang="ts">
  import { breakpointsTailwind } from '@vueuse/core'
  const { data } = useSanityQuery(groq`
    *[_type == "gallery_item"] {
      _id,
      title,
      image {
        asset,
        "aspectRatio": asset->metadata.dimensions.aspectRatio,
        "dominantColor": asset->metadata.palette.darkMuted.background
      },
      location
    }
  `)

  const { greater } = useBreakpoints(breakpointsTailwind)
  const greaterThanLg = greater('lg')
  const greaterThanMd = greater('md')
  const numberOfColumns = computed(() => {
    console.log('Runned')
    if (greaterThanLg.value) { return 4 }
    if (greaterThanMd.value) { return 3 }
    return 2
  })
</script>
