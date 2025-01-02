/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './components/**/*.vue',
  ],
  plugins: [],
  theme: {
    screens: {
      smartphone: '480px',
      tablet: '768px',
      laptop: '976px',
      desktop: '1440px',
    },
    container: {
      screens: {
        md: '1200px',
        xl: '1596px',
      },
    },
    fontFamily: {
      sans: ['Urbanist', 'sans-serif'],
      serif: ['Rufina', 'serif'],
    },
    extend: {
      fontFamily: {
        custom: ['Urbanist', 'Rufina'],
      },
      borderRadius: {
        global: '30rem',
      },
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      test: '#27a8cc',
      ble: {
        100: 'var(--color-ble-100)',
        200: 'var(--color-ble-200)',
        300: 'var(--color-ble-300)',
      },
      black: {
        100: 'var(--color-black-100)',
        200: 'var(--color-black-200)',
        300: 'var(--color-black-300)',
        400: 'var(--color-black-400)',
      },
    },
  },
}
