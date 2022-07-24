export type Shot = {
  _id: string
  title: string
  image: {
    asset: any
    aspectRatio: number
    // lqip: string
    dominantColor: string
  }
}

export const divideShotsInColumns = (shots: Shot[], columns: number) => {
  const elements: Shot[][] = new Array(columns).fill(undefined).map(() => [])
  shots.forEach((shot, index) => {
    elements[index % columns].push(shot)
  })
  return elements
}
