<template>
  <div class="relative h-screen py-32">
    <div class="-z-10 absolute inset-y-0 right-0 w-3/4 overflow-hidden">
      <div class="z-10 absolute inset-0 oriented-gradient w-full h-full" />
      <Motion
        :initial="{opacity: 0}"
        :animate="{
          opacity: 100,
          x: [0, '3%', 0],
          y: ['-3%', 0, '-3%']
        }"
        :transition="{
          x: { duration: 60, repeat: Infinity },
          y: { duration: 40, repeat: Infinity },
          opacity: { duration: 1 },
          easing: 'linear'
        }"
        class="scale-105 origin-top-left">
        <NuxtImg
          src="/images/profilePic.jpeg"
          fit="cover"
          :modifiers="{flop: true}"
          width="3796"
          height="4745"
          sizes="sm:100vw md:100vw lg:100vw xl:50vw"
          class="w-full h-full object-cover" />
      </Motion>
    </div>
    <UiContainer
      as="section"
      class="h-full flex flex-col justify-center">
      <Motion
        tag="p"
        class="mb-2"
        :initial="{opacity: 0}"
        :animate="{opacity: 1}"
        :transition="{delay: 0.2}">
        Hi, I'm
      </Motion>
      <Motion
        :initial="{opacity: 0}"
        :animate="{opacity: 1}"
        :transition="{delay: 0.4}">
        <UiTitle as="h1">
          Matthieu
        </UiTitle>
        <h3 class="mt-2 text-xs uppercase font-medium tracking-wide">
          Frontend developer
        </h3>
      </Motion>
      <Motion
        tag="p"
        class="mt-8 text-lg"
        :initial="{opacity: 0}"
        :animate="{opacity: 1}"
        :transition="{delay: 0.6}">
        Frontend developer and photography lover.
      </Motion>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
  import { Motion } from 'motion/vue'
  import UiTitle from './UiTitle.vue'
</script>

<style scoped lang="pcss">
.oriented-gradient {
  background-image: linear-gradient(100deg, theme(colors.black) 30%, theme(colors.black / 0%) 70%), linear-gradient(to top, theme(colors.black) 0%, theme(colors.black / 0%) 25%);
}
</style>
