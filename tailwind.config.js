/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#02255E',
        'background': '#F5F5F5',
        'secondary': '#3F88C5',
        'error': '#CA3C25',
        'warning': '#F2A541',
      },
    },
  },
  plugins: [],
}