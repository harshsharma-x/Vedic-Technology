/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        colors: {
          'custom-dark': '#232323',
        },
      },
    },
        
  },
  plugins: [],
}