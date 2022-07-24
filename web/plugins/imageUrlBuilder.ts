import imageUrlBuilder from '@sanity/image-url'
import { SanityClientLike, SanityImageSource } from '@sanity/image-url/lib/types/types'

export default defineNuxtPlugin(() => {
  const builder = imageUrlBuilder(useSanity().config as unknown as SanityClientLike)
  function urlFor (source: SanityImageSource) {
    return builder.image(source).auto('format').quality(80)
  }
  return {
    provide: { urlFor }
  }
})
