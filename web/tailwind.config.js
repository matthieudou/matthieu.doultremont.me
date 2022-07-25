const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      aspectRatio: {
        '4/5': '4 / 5'
      },
      colors: {
        black: '#011A24',
        white: '#F7F8F3'
      },
      fontFamily: {
        sans: ['"ClashGrotesk"', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
