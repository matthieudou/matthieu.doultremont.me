import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Home page')
        .child(
          S.document()
            .schemaType('home_page')
            .documentId('home_page')
        ),
      ...S.documentTypeListItems().filter(listItem => !['home_page'].includes(listItem.getId()))
    ])
