/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1f4e79',
          50: '#f2f6fb',
          100: '#e6eff7',
        }
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
}
