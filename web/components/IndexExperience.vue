<template>
  <UiContainer
    as="section"
    size="lg"
    class="py-16 md:py-32">
    <UiTitle class="md:text-center">
      Experience
    </UiTitle>

    <div class="mt-16 md:mt-20 grid grid-cols-[min-content_1fr] md:grid-cols-[1fr_min-content_1fr] gap-x-16 gap-y-0.5 items-stretch">
      <div
        v-for="(experienceItem, experienceItemIndex) in EXPERIENCE_ITEMS"
        :key="experienceItemIndex"
        class="contents">
        <div class="hidden md:block text-right">
          <UiTitle
            :level="2"
            as="h3">
            {{ experienceItem.company }}
          </UiTitle>
          <p class="mt-4 tabular-nums">
            {{ experienceItem.year }}
          </p>
        </div>
        <div class="flex">
          <div class="-z-10 translate-x-4 h-full border-l border-dashed border-white" />
          <div class="bg-black rounded-full w-8 h-8 flex items-center justify-center border border-white border-dashed">
            <div class="w-4 h-4 bg-red-500 rounded-full" />
          </div>
        </div>
        <div class="pb-16">
          <UiTitle
            :level="2"
            as="h3">
            {{ experienceItem.title }}
          </UiTitle>
          <div class="mt-2 flex items-center gap-2 md:hidden">
            <p class="font-semibold">
              {{ experienceItem.company }}
            </p>
            <p>
              {{ experienceItem.year }}
            </p>
          </div>
          <p class="mt-4">
            {{ experienceItem.description }}
          </p>
        </div>
      </div>
    </div>
  </UiContainer>
</template>

<script setup lang="ts">
  const EXPERIENCE_ITEMS = [
    {
      year: '2019 - Present',
      title: 'Front-end lead',
      company: 'Smovin',
      description: 'I’m now leading the development of the app.'
    },
    {
      year: '2019 - Present',
      title: 'Fullstack developer',
      company: 'Smovin',
      description: 'I worked as a fullstack developer'
    },
    {
      year: '2019 - Present',
      title: 'Fullstack developer',
      company: 'Seraphin',
      description: 'I worked 6 months as a fullstack developer.'
    },
    {
      year: '2019 - Present',
      title: 'Student',
      company: 'Le Wagon',
      description: 'I learned coding at Le Wagon.'
    }
  ]
</script>
