/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    fontFamily: {
      'body': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'fraunces': [
        'Fraunces', 'sans-serif'
      ],
      'europhia': [
        'Euphoria Script', 'sans-serif',
      ],
      'protest': [
        'Protest Riot', 'sans-serif',
      ],
      'qwigley': [
        'Qwigley', 'sans-serif',
      ],
      'alike': [
        'Alike', 'sans-serif',
      ],
      'alkatra': [
        'Alkatra', 'sans-serif',
      ],
      'marmelad': [
        'Marmelad', 'sans-serif',
      ],
      'amiri': [
        'Amiri', 'sans-serif',
      ],
      'alatsi': [
        'Alatsi', 'sans-serif'
      ],
    },
    extend: {
      colors: {
        'primary': '#FFC600',
        'text': '#722F37',
        'price': '#4E2A2A',
      },
    },
  },
  plugins: [],
}

