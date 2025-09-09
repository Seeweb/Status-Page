/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Seeweb brand
        sunglow: {
          50:  '#FFF8CC',
          100: '#FFF0A6',
          200: '#FFE866',
          500: '#FFD200', // main yellow
          600: '#FFC400'
        },
        shark: {
          100: '#F1F1F1',
          200: '#D9D9D9'
        },
        alabaster: {
          50: '#F5F5F5'
        },

        // Semantic tokens used by your CSS @apply rules
        accent:        '#FFD200',   // alias of sunglow-500
        'primary-dark':'#111111',
        primary:       '#111111',
        secondary:     '#1F1F1F',
        'secondary-dark':'#2A2A2A',
        tertiary:      '#121212',
        'tertiary-dark':'#0B0B0B'
      },
      boxShadow: {
        DEFAULT: '0 1px 2px 0 rgb(0 0 0 / 0.06)'
      }
    }
  },
  plugins: []
};
