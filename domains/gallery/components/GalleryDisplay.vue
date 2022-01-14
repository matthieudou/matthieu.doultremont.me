<template>
  <div
    class="flex gap-8">
    <div
      v-for="(imageItems, columnIndex) in columns"
      :key="columnIndex"
      class="transform first:translate-y-20 last:translate-y-10 flex flex-col gap-8">
      <GalleryImage
        v-for="(imageItem, imageIndex) in imageItems"
        :key="imageIndex"
        loading="lazy"
        :src="'/api/image' + imageItem.src" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import GalleryImage from '~/domains/gallery/components/GalleryImage.vue'
  import { GalleryItem, galleryItems } from '~/domains/gallery/services/galleryService'
  import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

  const divideImagesInColumns = (items: GalleryItem[], columns: number, gap: number): GalleryItem[][] => {
    const columnHeights: number[] = [...new Array(columns)].fill(0)
    const columnResults: GalleryItem[][] = [...new Array(columns)].fill(undefined).map(() => [])
    items.forEach(item => {
      const columnIndex = columnHeights.indexOf(Math.min(...columnHeights))
      columnResults[columnIndex].push(item)
      columnHeights[columnIndex] += (1 / item.ratio) * 100 + gap
    })
    return columnResults
  }

  const breakpoints = useBreakpoints(breakpointsTailwind)
  const greaterLg = breakpoints.greater('lg')
  const greaterMd = breakpoints.greater('md')

  const columns = computed(() => {
    if (greaterLg.value) return divideImagesInColumns(galleryItems, 3, 32)
    if (greaterMd.value) return divideImagesInColumns(galleryItems, 2, 32)
    return divideImagesInColumns(galleryItems, 1, 32)
  })

</script>
