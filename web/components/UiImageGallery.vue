<template>
  <div>
    <div
      class="grid gap-4 md:gap-8"
      :style="{gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`}">
      <div
        v-for="(columnItems, columnIndex) in divideItemsInColumns(items, columns)"
        :key="columnIndex"
        class="flex flex-col gap-4 md:gap-8
          [&:nth-child(3n-2)]:translate-y-10 [&:nth-child(3n-2)]:mb-10
          [&:nth-child(3n-0)]:translate-y-20  [&:nth-child(3n-0)]:mb-20">
        <Motion
          v-for="item in columnItems"
          :key="item.index"
          tag="button"
          :initial="{opacity:0, scale:0.9}"
          :in-view="{opacity:1, scale:1}"
          :hover="{scale: 1.02}"
          class="focus:outline-none focus-visible:ring rounded-xl"
          @click="displayShot(item)"
          @mouseover="preloadItem(item)">
          <NuxtPicture
            :src="item.url"
            sizes="sm:50vw md:33vw lg:25vw"
            :img-attrs="{class: 'rounded-xl', alt: item.title}" />
            <!-- width="500"
            height="500" -->
        </Motion>
      </div>
    </div>

    <div
      v-if="isItemDisplayed"
      class="fixed z-20 inset-0">
      <!-- backdrop -->
      <div
        :style="{backgroundColor: items[displayedItemIndex].dominantColor}"
        class="absolute inset-0 opacity-50 transition duration-700" />
      <button
        class="z-30 absolute top-4 right-4 p-2 hover:scale-105 transition duration-500 group text-white backdrop-blur-sm rounded-lg overflow-hidden"
        @click="handleClose">
        <div
          :style="{backgroundColor: items[displayedItemIndex].dominantColor}"
          class="absolute inset-0 opacity-25 transition duration-700" />
        <IconCross class="relative w-6 h-6 group-hover:rotate-90 transition duration-500" />
      </button>
      <button
        class="z-30 absolute top-1/2 left-4 p-2 hover:scale-105 transition duration-500 group text-white backdrop-blur-sm rounded-lg overflow-hidden"
        @click="handlePrevious">
        <div
          :style="{backgroundColor: items[displayedItemIndex].dominantColor}"
          class="absolute inset-0 opacity-25 transition duration-700" />
        <IconChevronLeft class="relative w-6 h-6 group-hover:-translate-x-1 transition duration-500" />
      </button>
      <button
        class="z-30 absolute top-1/2 right-4 p-2 hover:scale-105 transition duration-500 group text-white backdrop-blur-sm rounded-lg overflow-hidden"
        @click="handleNext">
        <div
          :style="{backgroundColor: items[displayedItemIndex].dominantColor}"
          class="absolute inset-0 opacity-25 transition duration-700" />
        <IconChevronRight class="relative w-6 h-6 group-hover:translate-x-1 transition duration-500" />
      </button>
      <NuxtPicture
        :src="items[displayedItemIndex].url"
        :img-attrs="{
          class: 'w-full h-full object-contain backdrop-blur-xl bg-black/20',
          alt: items[displayedItemIndex].title
        }" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Motion } from 'motion/vue'
  import type { GalleryItem } from '~/types/models'

  // TODO: PRELOAD IMAGE WHEN $IMG IS AVAILABLE
  // import { preloadImages } from '~/utils'

  const props = defineProps<{
    columns: number
    items: GalleryItem[]
  }>()

  // STATE
  const displayedItemIndex = ref<number>(-1)
  const isItemDisplayed = computed(() => displayedItemIndex.value > -1)

  // ACTIONS
  const displayShot = (item: GalleryItem) => {
    displayedItemIndex.value = item.index
    const nextIndex = displayedItemIndex.value + 1 >= props.items.length ? 0 : displayedItemIndex.value + 1
    const previousIndex = displayedItemIndex.value - 1 < 0 ? props.items.length - 1 : displayedItemIndex.value - 1
    preloadItem(props.items[nextIndex])
    preloadItem(props.items[previousIndex])
  }
  const handleClose = () => { displayedItemIndex.value = -1 }
  const handleNext = () => {
    const getNextIndex = (idx: number) => idx + 1 >= props.items.length ? 0 : idx + 1
    const nextIndex = getNextIndex(displayedItemIndex.value)
    displayShot(props.items[nextIndex])
    const preloadIndex = getNextIndex(nextIndex)
    preloadItem(props.items[preloadIndex])
  }
  const handlePrevious = () => {
    const getPreviousIndex = (idx: number) => idx - 1 < 0 ? props.items.length - 1 : idx - 1
    const previousIndex = getPreviousIndex(displayedItemIndex.value)
    displayShot(props.items[previousIndex])
    const preloadIndex = getPreviousIndex(previousIndex)
    preloadItem(props.items[preloadIndex])
  }

  // UTILS
  // const getFullscreenImageProps = (item: GalleryItem) => {
  //   console.log(createImage({})(item.url))
  //   return {
  //     src: ''
  //   }
  // }
  const preloadItem = (_item: GalleryItem) => {
    // preloadImages([getFullscreenImageProps(shot)])
  }

  onKeyStroke('ArrowLeft', () => isItemDisplayed.value && handlePrevious())
  onKeyStroke('ArrowRight', () => isItemDisplayed.value && handleNext())
  onKeyStroke('Escape', () => isItemDisplayed.value && handleClose())

  const divideItemsInColumns = (items: GalleryItem[], columns: number) => {
    const elements: GalleryItem[][] = new Array(columns).fill(undefined).map(() => [])
    items.forEach((item, index) => {
      elements[index % columns].push(item)
    })
    return elements
  }
</script>
