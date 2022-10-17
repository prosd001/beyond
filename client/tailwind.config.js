/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1600px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}
