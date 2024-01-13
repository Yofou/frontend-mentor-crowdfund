import plugins from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      white: {
        full: '#FFF',
        300: '#FAFAFA',
      },
      black: {
        full: '#000',
      },
      grey: {
        300: '#B1B1B1',
        600: '#929292',
        900: '#7A7A7A',
        1000: '#707070',
        1200: '#444444',
        1500: '#2F2F2F',
      },
      cyan: {
        300: '#3CB3AB',
        600: '#147A73'
      }
    },
    fontFamily: {
      commis: ["'Commissioner Variable'", "sans-serif"]
    }
  },
  plugins: [
    plugins(({ addUtilities, theme }) => {
      addUtilities({
        '.heading-l': {
          fontFamily: theme('fontFamily.commis'),
          fontSize: '2rem', // 32px
        },
        '.heading-lg': {
          fontFamily: theme('fontFamily.commis'),
          fontSize: '1.5rem', // 24rem
        },
        '.heading-m': {
          fontFamily: theme('fontFamily.commis'),
          fontSize: '1.25rem', // 20px
        },
        '.heading-s': {
          fontFamily: theme('fontFamily.commis'),
          fontSize: '1.125rem', // 18px
        },
        '.display': {
          fontFamily: theme('fontFamily.commis'),
          fontSize: '1.75rem', // 28px
        },
        '.body-m': {
          fontFamily: theme('fontFamily.commis'),
          fontSize: '1rem', // 16px
        },
        '.body-s': {
          fontFamily: theme('fontFamily.commis'),
          fontSize: '0.9375rem', // 15px
        },
        '.body-xs': {
          fontFamily: theme('fontFamily.commis'),
          fontSize: '0.875rem', // 14px
        },
      })
    })
  ],
}

