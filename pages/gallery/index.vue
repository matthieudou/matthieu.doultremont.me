<template>
  <div class="py-8 md:py-24 px-4 md:px-8 max-w-screen-xl mx-auto">
    <h1 class="text-3xl md:text-5xl font-black">
      Gallery
    </h1>

    <Motion
      v-if="!pending"
      class="mt-8 md:mt-20 opacity-0"
      :animate="{y: [200, 0], opacity: [0, 1]}">
      <div
        ref="gridContainerRef"
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        <div
          v-for="(elts, idx) in computedItems"
          class="flex flex-col gap-4 md:gap-8 even:translate-y-4 md:even:translate-y-16"
          :key="idx">
          <GalleryItem
            v-for="(item) in elts"
            :style="{aspectRatio: item.image.asset.metadata.dimensions.aspectRatio}"
            :key="item._id"
            :gallery-item="item" />
        </div>
      </div>
    </Motion>
  </div>
</template>

<script setup lang="ts">
  import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
  import { Motion } from 'motion/vue'
  import { sanityClient, sanityImage } from '~/services/sanity'

  usePageTitle('Gallery')
  const items = useState<{
    _id: string
    image: {
      _type: string
      asset: {
        _ref: string
        metadata: {
          dimensions: { aspectRatio: number }
          lqip: string
          palette: { dominant: { background: string }}
        }
      }
    }
  }[]>('galleryItems', () => [])

  const { pending } = useAsyncData(
    'fetchGalleryItems',
    async () => {
      const response = await sanityClient.fetch(`*[_type == "gallery_item"] {
        _id,
        "imageRef": image,
        image {
          _type,
          asset-> {
            _type,
            _ref,
            metadata {
              dimensions { aspectRatio },
              lqip,
              palette { dominant { background }}
            }
          }
        }
      }`)
      items.value = response
    }
  )

  const {md, lg} = useBreakpoints(breakpointsTailwind)

  const computeItems = <T>({
    elements, aspectRatio
    }: {
    elements: T[]
    aspectRatio: (item: T) => number
    }) => {
    const numberOfColumns = lg.value ? 4 : md.value ? 3 : 2
    const arrays: T[][]= new Array(numberOfColumns).fill(undefined).map(() => [])
    elements.forEach((el, index) => {
      const columnIndex = index % numberOfColumns
      arrays[columnIndex].push(el)
    })

    return arrays
  }

  const computedItems = computed(() => {
    return computeItems({
      elements: items.value,
      aspectRatio: (item) => item.image.asset.metadata.dimensions.aspectRatio
    })
  })
</script>
