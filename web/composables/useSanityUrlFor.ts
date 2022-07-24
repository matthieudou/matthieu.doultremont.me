import imageUrlBuilder from '@sanity/image-url'
import { SanityClientLike, SanityImageSource, ImageUrlBuilderOptionsWithAliases } from '@sanity/image-url/lib/types/types'

export const useSanityUrlFor = () => {
  const builder = imageUrlBuilder(useSanity().config as unknown as SanityClientLike)
  return (source: SanityImageSource, options?: ImageUrlBuilderOptionsWithAliases) => {
    const base = builder.withOptions({
      auto: 'format',
      quality: 80,
      source,
      ...options
    })

    return {
      src: base.url(),
      srcset: `
        ${base.dpr(1).url()} 1x,
        ${base.dpr(2).url()} 2x,
        ${base.dpr(3).url()} 3x
      `
    }
  }
}
