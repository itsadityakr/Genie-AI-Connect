/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.html"],
  theme: {
    extend: {
      colors:{
        chatBlue: {50: '#09005A'},
        pureWhite: {10:"#FFFFFF"}
      }
    },
  },
  plugins: [],
}

