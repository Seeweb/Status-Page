/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,svelte,ts}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#F5DD3C', // giallo accessorio (legacy, se lo usi nelle @apply)
        sunglow: {
          50:  '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300'
        },
        tertiary: '#F7F7F7',
        'tertiary-dark': '#0f172a',
        'primary-dark': '#1f2937',
        secondary: '#f1f5f9',
        'secondary-dark': '#334155',
        shark: { 100: '#f3f4f6', 200: '#e5e7eb' },
        alabaster: { 50: '#fafafa' },
        code: '#0b1020'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
    themes: [
      {
        seeweb: {
          /* base (sfondi/testi) */
          'base-100': '#F7F7F7',   // sfondo pagina chiaro
          'base-200': '#eef1f5',
          'base-300': '#e5e7eb',
          'base-content': '#111827', // testo principale (quasi-nero)

          /* semantiche */
          primary: '#111827',        // scuro usato in banner/pill
          'primary-content': '#ffffff',
          secondary: '#334155',
          'secondary-content': '#ffffff',
          accent: '#F0D13C',         // giallo brand
          'accent-content': '#111827',

          info: '#2563eb',
          success: '#16a34a',
          warning: '#f59e0b',
          error: '#dc2626',

          /* neutri */
          neutral: '#0f172a',
          'neutral-content': '#cbd5e1'
        }
      },
      'light', 'dark'
    ]
  }
};
