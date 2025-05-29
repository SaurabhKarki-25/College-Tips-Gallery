/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'html': { fontSize: '16px' },
      });
    },
    function ({ addUtilities }) {
      const newUtilities = {
        '.aspect-w-4': {
          position: 'relative',
          paddingBottom: 'calc(3 / 4 * 100%)',
        },
        '.aspect-h-3': {
          position: 'relative',
        },
        '.aspect-w-4 > *': {
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};