import { createIPX, createIPXMiddleware } from 'ipx'

const ipx = createIPX({
  dir: './public/',
  domains: ['images.unsplash.com']
})

export default createIPXMiddleware(ipx)