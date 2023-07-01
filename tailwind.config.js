/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: '#e38826',
        cyan: '#006970',
        darkCyan: '#004241',
        transparentWhite: '#FFFFFF',
        gray: '#F2F2F2'
      },
      fontFamily: {
        'Lexend-Deca': ['Lexend Deca', 'sans-serif'],
        'Big-Shoulder-Display': ['Big Shoulders Display', 'cursive']
      },
    },
  },
  plugins: [],
}

