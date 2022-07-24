<template>
  <footer class="relative">
    <div class="-z-10 asbolute absolute inset-y-0 right-0 h-full w-full md:w-1/2">
      <div class="hidden md:block z-10 absolute w-full h-full bg-gradient-to-r from-black via-black/30 to-black/0" />
      <div class="z-10 absolute w-full h-full bg-gradient-to-b from-black via-black/30 to-black/0" />
      <img
        class="w-full h-full object-cover"
        v-bind="urlFor(data.footer_image, { height: 400, width: 800, flipHorizontal: true })">
    </div>
    <UiContainer class="py-20 md:py-40 grid place-items-center">
      <h2 class="text-lg mb-2 text-white/60">
        Contact me at
      </h2>
      <button @click="copy('matthieu@doultremont.me')">
        <p class="clamped-text font-bold leading-tight tracking-wide">
          matthieu@doultremont.me
        </p>
        <p
          v-if="isSupported"
          class="text-sm text-white/60 tracking-wide">
          <template v-if="copied">
            Email copied!
          </template>
          <template v-else>
            Copy email
          </template>
        </p>
      </button>
      <div class="mt-8 flex items-center gap-2 -mx-2">
        <a
          v-for="(socialItem, socialItemIndex) in SOCIALS"
          :key="socialItemIndex"
          :href="socialItem.url"
          target="_blank"
          class="p-2 hover:bg-white/10 rounded-lg focus:outline-none focus:ring text-white/60 hover:text-white transition">
          <span class="sr-only">{{ socialItem.name }}</span>
          <Component
            :is="socialItem.icon"
            class="w-8 h-8" />
        </a>
      </div>
    </UiContainer>
  </footer>
</template>

<script setup lang="ts">
  import IconLinkedin from '~/components/IconLinkedin.vue'
  import IconGithub from '~/components/IconGithub.vue'
  import IconTwitter from '~/components/IconTwitter.vue'
  import IconInstagram from '~/components/IconInstagram.vue'

  const SOCIALS = [
    { icon: IconLinkedin, name: 'Linkedin', url: 'https://www.linkedin.com/in/matthieudou' },
    { icon: IconGithub, name: 'Github', url: 'https://github.com/matthieudou' },
    { icon: IconTwitter, name: 'Twitter', url: 'https://twitter.com/matthieudou' },
    { icon: IconInstagram, name: 'Instagram', url: 'https://www.instagram.com/matthieudou' }
  ]

  const { copied, isSupported, copy } = useClipboard()

  const query = groq`
    *[_id == "home_page"] {
      footer_image
    }[0]
  `

  const { data } = useSanityQuery(query)

  const urlFor = useSanityUrlFor()
</script>

<style scoped>
  .clamped-text {
    font-size: min(theme('fontSize.6xl'), 6.5vw);
  }
</style>
