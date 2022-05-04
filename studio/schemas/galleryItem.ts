export default {
  name: 'gallery_item',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'image',
      type: 'image'
    },
    {
      name: 'location',
      type: 'string'
    },
    {
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }]
    }
  ]
} as const