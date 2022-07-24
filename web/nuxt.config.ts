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
    '@nuxtjs/sanity'
  ],

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],

  sanity: {
    projectId: 'mtvzztya',
    apiVersion: '2022-01-01'
  }
})
