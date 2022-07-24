import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import galleryItem from './galleryItem'
import homePage from './homePage'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    galleryItem,
    homePage
  ]),
})
