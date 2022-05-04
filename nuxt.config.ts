import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  typescript: {
    strict: true
  },

  css: [
    '~/assets/css/main.css'
  ],

  modules: [
    '@nuxtjs/sanity'
  ],

  sanity: {
    projectId: 'mtvzztya',
    dataset: 'production',
    apiVersion: '2022-01-01',
    useCdn: true
  },

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          'postcss-focus-visible': {},
          autoprefixer: {}
        }
      }
    }
  }
})
