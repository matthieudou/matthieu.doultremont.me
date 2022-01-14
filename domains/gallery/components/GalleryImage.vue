<template>
  <Motion
    ref="imageRef"
    tag="img"
    class="w-full h-full"
    :animate="animateObject"
    :transition="{
      duration: 2,
      easing: spring({ stiffness: 500 }),
      x: { duration: 0.5, easing: 'ease-out' },
      y: { duration: 0.5, easing: 'ease-out' }
    }"
    :src="src" />
</template>

<script setup lang="ts">import { useMouseInElement } from '@vueuse/core'
  import { Motion } from 'motion/vue'
  import { spring } from 'motion'
  const props = defineProps<{
    src: string
  }>()

  const imageRef = ref<HTMLImageElement>()
  const {
    elementX,
    elementY,
    elementWidth,
    elementHeight,
    isOutside} = useMouseInElement(imageRef)

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
