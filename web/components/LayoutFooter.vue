<template>
  <footer class="pt-16 md:pt-32 bg-black text-white">
    <UiContainer>
      <div class="grid md:grid-cols-2 gap-16">
        <div>
          <UiTitle>
            Contact
          </UiTitle>
          <p class="mt-4 text-xl">
            Any questions ? Let's keep in touch
          </p>
          <div class="mt-8 flex items-center gap-2">
            matthieu@doultremont.me
            <button
              v-show="isSupported"
              class="hover:bg-white/10 rounded px-2 py-1 transition focus:outline-none focus:ring group relative"
              @click="copy('matthieu@doultremont.me')">
              <span
                v-if="!copied"
                class="absolute group-hover:opacity-100 opacity-0 transition delay-1000 whitespace-nowrap left-full pl-2 inset-y-0 text-xs flex items-center">
                Copy to clipboard
              </span>
              <span
                v-else
                class="absolute left-full pl-2 inset-y-0 text-xs flex items-center">
                Copied!
              </span>
              <IconCheck v-if="copied" />
              <IconCopy v-else />
            </button>
          </div>

          <!-- SOCIALS -->
          <div class="mt-16 flex items-center gap-2 -mx-2">
            <a
              v-for="(socialItem, socialItemIndex) in SOCIALS"
              :key="socialItemIndex"
              :href="socialItem.url"
              target="_blank"
              class="p-2 hover:bg-white/10 rounded-lg focus:outline-none focus:ring">
              <span class="sr-only">{{ socialItem.name }}</span>
              <Component
                :is="socialItem.icon"
                class="w-8 h-8" />
            </a>
          </div>
        </div>
        <div>
          <img
            v-bind="urlFor(data.footer_image, { height: 320})"
            class="w-full h-40 md:h-80 rounded-xl object-cover"
            loading="lazy">
        </div>
      </div>

      <!-- FOOTER -->
      <div class="mt-16 md:mt-32 pb-2 flex flex-col sm:flex-row items-center gap-1 justify-center sm:justify-between text-xs">
        <p>
          © {{ new Date().getFullYear() }} All rights reserved
        </p>
        <p>
          Designed & developed by myself
        </p>
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
