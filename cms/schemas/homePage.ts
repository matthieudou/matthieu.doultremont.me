export default {
  type: 'document',
  name: 'home_page',
  title: 'Home page',
  fields: [
    {
      name: 'hero_image',
      type: 'image',
      title: 'Hero image'
    },
    {
      name: 'best_shots',
      title: 'Best shots',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'gallery_item'}] }
      ]
    },
    {
      name: 'footer_image',
      type: 'image',
      title: 'Footer image',
      options: {
        hotspot: true
      }
    }
  ]
}