import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },

  app: {
    head: {
      title: 'Matthieu’s website',
      htmlAttrs: {
        class: 'font-sans bg-black text-white',
        lang: 'en'
      }
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  modules: [
    '@vueuse/nuxt',
    '@nuxt/image-edge'
  ],

  buildModules: [
    '@nuxtjs/tailwindcss'
  ]
})
