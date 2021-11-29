type GalleryItem = Readonly<{
  src: string
  alt: string
  ratio: number
}>

export default {
  items: [{
    alt: '',
    src: '',
    ratio: 4/5
  }] as GalleryItem[]
}