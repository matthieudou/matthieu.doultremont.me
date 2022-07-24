module.exports = {
  root: true,

  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],

  rules: {
    indent: ['error', 2],

    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: 1
    }],
    'vue/html-quotes': ['error', 'double'],
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],
    'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }]
  },

  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    },
    {
      files: ['*.js'],
      rules: {
        'vue/script-indent': 'off'
      }
    }
  ]
}
