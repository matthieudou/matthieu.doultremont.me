import client from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = client({
  projectId: 'mtvzztya',
  dataset: 'production',
  apiVersion: '2022-01-01',
  useCdn: true
})

const builder = imageUrlBuilder(sanityClient)

export const sanityImage = (source: Parameters<typeof builder.image>[0]) => {
  return builder.image(source)
}
