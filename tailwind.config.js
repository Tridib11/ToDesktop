/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'primary':'#ee0181',
        'tridib':'#01ee91'
      },
      fontFamily:{
        'display':['Poppins','san-serif'],
        'body':['Inter','san-serif']
      }
    },
  },
  plugins: [],
}

