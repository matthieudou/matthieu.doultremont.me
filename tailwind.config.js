module.exports = {
  content: [
    './components/**/*.{vue,js,ts,tsx}',
    './composables/**/*.{vue,js,ts,tsx}',
    './domains/**/*.{vue,js,ts,tsx}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.ts'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'DM Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        serif: [
          'DM Serif Display',
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif'
        ],
        mono: [
          'DM Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace'
        ]
      }
    },
  },
  plugins: [],
}
