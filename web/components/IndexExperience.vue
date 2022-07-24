<template>
  <section class="bg-black text-white">
    <UiContainer class="py-16 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32">
      <div>
        <UiTitle>
          Skills <span class="text-red-500">&</span><br>Experience
        </UiTitle>
        <UiTitle
          class="mt-16 md:mt-32"
          :level="2">
          Skills
        </UiTitle>
        <ul class="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <li
            v-for="(skillItem, skillItemIndex) in SKILL_ITEMS"
            :key="skillItemIndex">
            <div class="w-14 h-14 rounded-lg bg-white shadow flex items-center justify-center">
              <Component
                :is="skillItem.icon"
                class="text-black w-8 h-8" />
            </div>
            <div class="mt-4">
              {{ skillItem.text }}
            </div>
          </li>
        </ul>
      </div>
      <div>
        <UiTitle :level="2">
          Experience
        </UiTitle>

        <ul class="mt-8 md:mt-12">
          <li
            v-for="(experienceItem, experienceItemIndex) in EXPERIENCE_ITEMS"
            :key="experienceItemIndex"
            class="border-t border-white grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 pt-4 pb-8 items-baseline">
            <div class="text-sm">
              {{ experienceItem.year }}
            </div>

            <div class="col-span-3">
              <div class="text-lg font-semibold">
                {{ experienceItem.title }}
                <span class="text-sm font-normal">@{{ experienceItem.company }}</span>
              </div>
              <div class="mt-1">
                {{ experienceItem.description }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
  import IconArrowDownCircle from '~/components/IconArrowDownCircle.vue'

  const SKILL_ITEMS = [
    { icon: IconArrowDownCircle, text: 'Animation' },
    { icon: IconArrowDownCircle, text: 'Clean code' },
    { icon: IconArrowDownCircle, text: 'Design curious' },
    { icon: IconArrowDownCircle, text: 'Clean components' },
    { icon: IconArrowDownCircle, text: 'Animation' },
    { icon: IconArrowDownCircle, text: 'Animation' }
  ]

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
