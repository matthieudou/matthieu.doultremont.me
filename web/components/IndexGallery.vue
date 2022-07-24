<template>
  <section class="py-16 md:py-32 dark:text-white">
    <UiContainer class="grid md:grid-cols-2 gap-16 md:gap-32">
      <div>
        <UiTitle>
          Photography
        </UiTitle>
        <UiTitle
          :level="2"
          class="mt-32">
          Equipment
        </UiTitle>
      </div>
      <div>
        <div class="flex items-center justify-between">
          <UiTitle :level="2">
            Best shots
          </UiTitle>
          <NuxtLink
            to="/gallery"
            class="inline-flex items-center gap-2 group focus-visible:outline-none focus-visible:ring rounded-lg px-2 py-1 hover:bg-black/10 transition">
            See all
            <IconChevronRight class="group-hover:translate-x-2 transition" />
          </NuxtLink>
        </div>

        <SanityGallery
          class="mt-16"
          :columns="2"
          :shots="data.best_shots" />
      </div>
    </UiContainer>
  </section>
</template>

<script lang="ts" setup>
  const { data } = useSanityQuery(groq`
    *[_id == "home_page"] {
      best_shots[]->{
        _id,
        title,
        image {
          asset,
          "aspectRatio": asset->metadata.dimensions.aspectRatio,
          "dominantColor": asset->metadata.palette.darkMuted.background
        },
        location
      }
    }[0]
  `)
</script>
