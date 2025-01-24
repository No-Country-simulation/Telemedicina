/** @type {import('tailwindcss').Config} */
export default {
  important: "#root",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors:{
        primary:'#234A6B',
        blueLight:'#6FBBE3',
        btns:'#546FEA'
      },
      backgroundImage:{
        'testimonials':'url(../src/assets/testimonials-bg.svg)'
      },
      screens:{
        'custom-sm':'425px',
        'custom-md':'900px'

      }
    },
  },
  plugins: [],
}

