/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'primary':'#3238f2'
      },
      fontFamily:{
        'display':['Poppins','san-serif'],
        'body':['Inter','san-serif']
      }
    },
  },
  plugins: [],
}

