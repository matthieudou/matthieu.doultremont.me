<template>
  <div>
    <div
      class="grid gap-8"
      :style="{gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`}">
      <div
        v-for="(columnShots, columnIndex) in divideShotsInColumns(shots, columns)"
        :key="columnIndex"
        class="flex flex-col gap-8
          [&:nth-child(3n-2)]:translate-y-10 [&:nth-child(3n-2)]:mb-10
          [&:nth-child(3n-0)]:translate-y-20  [&:nth-child(3n-0)]:mb-20">
        <SanityGalleryImage
          v-for="shot in columnShots"
          :key="shot._id"
          :shot="shot"
          :options="{width: 300}"
          @click="displayShot(shot)"
          @mouseover="preloadShot(shot)" />
      </div>
    </div>

    <div
      v-if="displayedShot"
      class="fixed z-20 inset-0">
      <!-- backdrop -->
      <div
        :style="{backgroundColor: displayedShot.image.dominantColor}"
        class="absolute inset-0 opacity-50 transition duration-700" />
      <button
        class="z-30 absolute top-4 right-4 p-2 hover:scale-105 transition duration-500 group text-white backdrop-blur-sm rounded-lg overflow-hidden"
        @click="handleClose">
        <div
          :style="{backgroundColor: displayedShot.image.dominantColor}"
          class="absolute inset-0 opacity-25 transition duration-700" />
        <IconCross class="relative w-6 h-6 group-hover:rotate-90 transition duration-500" />
      </button>
      <button
        class="z-30 absolute top-1/2 left-4 p-2 hover:scale-105 transition duration-500 group text-white backdrop-blur-sm rounded-lg overflow-hidden"
        @click="handlePrevious">
        <div
          :style="{backgroundColor: displayedShot.image.dominantColor}"
          class="absolute inset-0 opacity-25 transition duration-700" />
        <IconChevronLeft class="relative w-6 h-6 group-hover:-translate-x-1 transition duration-500" />
      </button>
      <button
        class="z-30 absolute top-1/2 right-4 p-2 hover:scale-105 transition duration-500 group text-white backdrop-blur-sm rounded-lg overflow-hidden"
        @click="handleNext">
        <div
          :style="{backgroundColor: displayedShot.image.dominantColor}"
          class="absolute inset-0 opacity-25 transition duration-700" />
        <IconChevronRight class="relative w-6 h-6 group-hover:translate-x-1 transition duration-500" />
      </button>
      <img
        v-bind="getFullscreenImageProps(displayedShot)"
        class="w-full h-full object-contain backdrop-blur-xl bg-black/20">
    </div>
  </div>
</template>

<script setup lang="ts">
  import { preloadImages } from '~/utils'
  import { divideShotsInColumns, Shot } from '~/services/sanityGallery'

  const props = defineProps<{
    columns: number
    shots: Shot[]
  }>()

  const urlFor = useSanityUrlFor()

  // STATE
  const displayedShot = ref<Shot>()
  const displayedShotIndex = computed(() => props.shots.findIndex(shot => displayedShot.value?._id === shot._id))

  // ACTIONS
  const displayShot = (shot: Shot) => {
    displayedShot.value = shot
    const nextIndex = displayedShotIndex.value + 1 >= props.shots.length ? 0 : displayedShotIndex.value + 1
    const previousIndex = displayedShotIndex.value - 1 < 0 ? props.shots.length - 1 : displayedShotIndex.value - 1
    preloadShot(props.shots[nextIndex])
    preloadShot(props.shots[previousIndex])
  }
  const handleClose = () => { displayedShot.value = undefined }
  const handleNext = () => {
    const index = displayedShotIndex.value
    const nextIndex = index + 1 >= props.shots.length ? 0 : index + 1
    displayShot(props.shots[nextIndex])
    const preloadIndex = nextIndex + 1 >= props.shots.length ? 0 : nextIndex + 1
    preloadShot(props.shots[preloadIndex])
  }
  const handlePrevious = () => {
    const index = displayedShotIndex.value
    const previousIndex = index - 1 < 0 ? props.shots.length - 1 : index - 1
    displayShot(props.shots[previousIndex])
    const preloadIndex = previousIndex - 1 < 0 ? props.shots.length - 1 : previousIndex - 1
    preloadShot(props.shots[preloadIndex])
  }

  // UTILS
  const getFullscreenImageProps = (shot: Shot) => {
    return urlFor(shot.image, { ...imageDimensions.value })
  }
  const preloadShot = (shot: Shot) => {
    preloadImages([getFullscreenImageProps(shot)])
  }

  const { width, height } = useWindowSize()
  const imageDimensions = computed(() => {
    if (width.value > height.value) {
      return { height: height.value }
    }
    return { width: width.value }
  })

  onKeyStroke('ArrowLeft', () => displayedShot.value && handlePrevious())
  onKeyStroke('ArrowRight', () => displayedShot.value && handleNext())
  onKeyStroke('Escape', () => displayedShot.value && handleClose())
</script>
