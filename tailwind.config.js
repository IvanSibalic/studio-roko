/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        dark: '#1A1612',
        mid: '#2E2923',
        gold: '#B8965A',
        'gold-light': '#D4AF7A',
        muted: '#7A7060',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'eyebrow': '0.18em',
      },
    },
  },
  plugins: [],
}
