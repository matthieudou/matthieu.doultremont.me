<template>
  <section class="py-16 md:py-32">
    <UiContainer>
      <UiTitle class="text-center">
        Skills
      </UiTitle>

      <ul class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <li
          v-for="(skill, skillIndex) in skillz"
          :key="skillIndex"
          class="relative">
          <div
            role="presentation"
            class="absolute inset-0 blur-lg bg-gradient-to-bl from-red-500/50 via-red-500 to-red-500/50 rounded-2xl opacity-50" />
          <div class="relative h-full bg-black p-12 rounded-2xl space-y-8">
            <img
              :src="skill.img.src"
              :srcset="skill.img.srcset"
              class="w-32 h-32 object-contain"
              loading="lazy">

            <UiTitle :level="2">
              {{ skill.title }}
            </UiTitle>

            <p class="leading-relaxed tracking-wider">
              {{ skill.text }}
            </p>
          </div>
        </li>
      </ul>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
  // IMAGES IMPORTS
  import lock1x from '~/assets/images/lock.png'
  import lock2x from '~/assets/images/lock@2x.png'
  import lock3x from '~/assets/images/lock@3x.png'
  import phone1x from '~/assets/images/phone.png'
  import phone2x from '~/assets/images/phone@2x.png'
  import phone3x from '~/assets/images/phone@3x.png'
  import play1x from '~/assets/images/play.png'
  import play2x from '~/assets/images/play@2x.png'
  import play3x from '~/assets/images/play@3x.png'
  import puzzle1x from '~/assets/images/puzzle.png'
  import puzzle2x from '~/assets/images/puzzle@2x.png'
  import puzzle3x from '~/assets/images/puzzle@3x.png'

  const skillz = [
    {
      title: 'Clean components',
      text: 'Writing good components is not an easy task. Since I started working, I’ve always wanted to improve the quality of the components. They need to have sensible defaults but also need to be extensible.',
      img: {
        src: puzzle1x,
        srcset: `
          ${puzzle1x} 1x,
          ${puzzle2x} 2x,
          ${puzzle3x} 3x
        `
      }
    },
    {
      title: 'Safe code',
      text: 'Writing good components is not an easy task. Since I started working, I’ve always wanted to improve the quality of the components. They need to have sensible defaults but also need to be extensible.',
      img: {
        src: lock1x,
        srcset: `
          ${lock1x} 1x,
          ${lock2x} 2x,
          ${lock3x} 3x
        `
      }
    },
    {
      title: 'Animations',
      text: 'Writing good components is not an easy task. Since I started working, I’ve always wanted to improve the quality of the components. They need to have sensible defaults but also need to be extensible.',
      img: {
        src: play1x,
        srcset: `
          ${play1x} 1x,
          ${play2x} 2x,
          ${play3x} 3x
        `
      }
    },
    {
      title: 'UI/UX ',
      text: 'Writing good components is not an easy task. Since I started working, I’ve always wanted to improve the quality of the components. They need to have sensible defaults but also need to be extensible.',
      img: {
        src: phone1x,
        srcset: `
          ${phone1x} 1x,
          ${phone2x} 2x,
          ${phone3x} 3x
        `
      }
    }
  ]
</script>
