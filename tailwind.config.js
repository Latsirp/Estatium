/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        blazeOrange: '#fd6803',
        artisansGold: '#f4a942',
        mangoMargarita: '#f7b64e',
        saffronMango: '#fac35a',
        chickadee: '#fccf67',
        glossyGold: '#ffdc73',
        white: '#fffdff',
        orchidBlossom: '#e4e2e4',
        nickel: '#949294',
        mochaccino: '#905808',
        black: '#000000',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

