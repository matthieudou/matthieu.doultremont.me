<template>
  <UiContainer class="py-16 md:py-32">
    <UiTitle class="md:text-center">
      Photography
    </UiTitle>

    <UiImageGallery
      class="mt-16"
      :columns="numberOfColumns"
      :items="displayedShots" />

    <div
      v-if="GALLERY_ITEMS.length > amountOfDisplayedItems"
      class="flex items-center justify-center mt-12">
      <button
        class="rounded border border-white px-4 py-2 hover:bg-white/10 transition"
        @click="handleDisplayMore">
        Show more...
      </button>
    </div>
  </UiContainer>
</template>

<script lang="ts" setup>
  import { breakpointsTailwind } from '@vueuse/core'
  import { GALLERY_ITEMS } from '@/constants'

  const DISPLAYED_AMOUNT_STEP = 4
  const amountOfDisplayedItems = ref(DISPLAYED_AMOUNT_STEP)

  const handleDisplayMore = () => {
    amountOfDisplayedItems.value += DISPLAYED_AMOUNT_STEP
  }

  const displayedShots = computed(() => {
    return GALLERY_ITEMS.slice(0, amountOfDisplayedItems.value)
  })

  const { greater } = useBreakpoints(breakpointsTailwind)
  const greaterThanLg = greater('lg')
  const greaterThanMd = greater('md')
  const numberOfColumns = computed(() => {
    if (greaterThanLg.value) { return 4 }
    if (greaterThanMd.value) { return 3 }
    return 2
  })

</script>
