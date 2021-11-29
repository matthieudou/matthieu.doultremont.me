module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended'
  ],
  parserOptions: {
    ecmaVersion: 13,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'vue/multi-word-component-names': ['off'],
    'vue/no-reserved-props': ['error', {
        'vueVersion': 3
    }],
    'vue/script-indent': ['error', 2, {
      baseIndent: 1
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],
  }
}
