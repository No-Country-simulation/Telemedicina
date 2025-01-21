/** @type {import('tailwindcss').Config} */
export default {
  important: "#root",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#234A6B',
        btns:'#546FEA'
      },
      backgroundImage:{
        'testimonials':'url(../src/assets/testimonials-bg.svg)'
              }
    },
  },
  plugins: [],
}

