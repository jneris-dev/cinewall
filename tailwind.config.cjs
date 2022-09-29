/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif']
    },
    screens: {
      'small-mobile': '576px',
      'mobile': '768px',
      'tablet': '992px',
      'notebook': '1200px',
      'desktop': '1400px',
    },
    extend: {},
  },
  plugins: [],
}