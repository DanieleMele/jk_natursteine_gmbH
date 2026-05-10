/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        stone: {
          50:  '#FAF8F5',
          100: '#F5F1EA',
          200: '#E8E1D4',
          300: '#D4C9B5',
          400: '#A89680',
          500: '#8B6F47',
          600: '#6E5636',
          700: '#524029',
          800: '#2B2620',
          900: '#1C1917',
        },
        bronze: {
          DEFAULT: '#8B6F47',
          light:   '#A8895F',
          dark:    '#6E5636',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
