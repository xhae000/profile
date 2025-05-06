/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],  theme: {
    extend: {},
    screens: {
      'mobile': { 'max': '639px' } // sm보다 작은 화면
    },
  },
  plugins: [],
}

