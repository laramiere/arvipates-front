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
      desktop: '1442px',
    },
    container: {
      screens: {
        md: '1200px',
        xl: '1442px',
      },
    },
    fontFamily: {
      sans: ['Urbanist', 'sans-serif'],
      serif: ['Rufina', 'serif'],
    },
    extend: {
      keyframes: {
        levitation: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        levitation: 'levitation 20s ease-in-out infinite',
      },
      backgroundImage: {
        flickerW: 'url(\'/images/flicker_bg_w.jpg\')',
        flickerB: 'url(\'/images/flicker_bg_b.jpg\')',
      },
      gridTemplateColumns: {
        'content-block': '20% 60% 20%',
      },
      fontFamily: {
        custom: ['Urbanist', 'Rufina'],
      },
      borderRadius: {
        global: '2.1875rem',
      },
      rotate: {
        4: '4deg',
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
