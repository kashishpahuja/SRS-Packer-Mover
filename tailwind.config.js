/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        keyframes: {
          slideInLeft: {
            '0%': { transform: 'translateX(-100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },slideUp: {
            '0%': { transform: 'translateY(100%)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
            'slide-right-left': {
              '0%': { transform: 'translateX(100%)' },
              '100%': { transform: 'translateX(0)' },
            },
        },
        animation: {
          slideInLeft: 'slideInLeft 1s ease-out',
          slideUp :'slideUp 1s ease-out forwards',
          fadeIn: 'fadeIn 1s ease-out',
          rightLeft: 'slide-right-left 1s ease-in-out forwards',

        }
      },
    },
  plugins: [],
}

