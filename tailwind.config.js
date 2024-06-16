/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./templates/**/*.html",
  "./src/**/*.js"],
  theme: {
    extend: {
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#9ca3af',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#0f766e',
            borderRadius: '4px',
          },
          // '&::-webkit-scrollbar-thumb:hover': {
          //   background: '#555',
          // },
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

