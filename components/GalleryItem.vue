<template>
  <Motion
    ref="imageRef"
    class="relative rounded-xl group"
    :style="{aspectRatio: galleryItem.image.asset.metadata.dimensions.aspectRatio, backgroundColor: galleryItem.image.asset.metadata.palette.dominant.background}"
    :animate="animateObject"
    :transition="{
      duration: 2,
      easing: spring({ stiffness: 500 }),
      x: { duration: 0.5, easing: 'ease-out' },
      y: { duration: 0.5, easing: 'ease-out' }
    }">
    <img
      class="absolute -z-20 inset-0 w-full h-full object-cover translate-x-1 translate-y-1 rounded-xl blur-lg transition-all duration-500 opacity-0 group-hover:opacity-80"
      :src="sanityImage(galleryItem.imageRef).width(400).url()"
      loading="lazy">
    <img
      class="w-full h-full object-cover rounded-xl"
      :src="sanityImage(galleryItem.imageRef).width(400).url()"
      loading="lazy">
  </Motion>
</template>

<script setup lang="ts">
  import { useMouseInElement } from '@vueuse/core'
  import { Motion } from 'motion/vue'
  import { spring, stagger } from 'motion'
  import { sanityImage } from '~/services/sanity'

  const props = defineProps<{
    galleryItem: {
      _id: string
      image: {
        asset: {
          _ref: string
          metadata: {
            dimensions: { aspectRatio: number }
            lqip: string
            palette: { dominant: { background: string }}
          }
        }
      }
    }
  }>()

  const imageRef = ref<HTMLImageElement>()
  const {
    elementX,
    elementY,
    elementWidth,
    elementHeight,
    isOutside
  } = useMouseInElement(imageRef)

  const AMOUNT_OF_PX_TO_MOVE = 16
  const animateObject = computed(() => {
    if (isOutside.value) return { x: 0, y: 0, scale: 1 }
    return {
      x: -(0.5 - ((elementX.value / elementWidth.value))) * AMOUNT_OF_PX_TO_MOVE * 2,
      y: -(0.5 - ((elementY.value / elementHeight.value))) * AMOUNT_OF_PX_TO_MOVE * 2,
      scale: 1.05
    }
  })
</script>
