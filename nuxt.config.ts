import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  css: ['~/assets/main.css'],

  build: {
    transpile: [],
    postcss: {
      postcssOptions: {
        plugins: {
          'postcss-nesting': {},
          'postcss-custom-properties': {},
          tailwindcss: {}
        }
      }
    }
  }
})
