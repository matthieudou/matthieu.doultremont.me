import { createIPX, createIPXMiddleware } from 'ipx'

const ipx = createIPX({
  dir: './assets/images/',
  domains: ['images.unsplash.com']
})

export default createIPXMiddleware(ipx)