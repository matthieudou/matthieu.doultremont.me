export const preloadImages = (
  imgs: {
    src: string,
    srcset?: string
  }[]
) => {
  imgs.forEach((img) => {
    const image = new Image()
    image.src = img.src
    if (img.srcset) {
      image.srcset = img.srcset
    }
  })
}
