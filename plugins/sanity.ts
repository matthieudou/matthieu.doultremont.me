import imageUrlBuilder from '@sanity/image-url'
export default defineNuxtPlugin(() => {
  const sanity = useSanity()
  const builder = imageUrlBuilder(sanity.config)

  const urlFor = builder.image

  return {
    provide: { urlFor }
  }
})