const colors = require('tailwindcss/colors')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#FF206E',
      white: '#FFFFFF',
      secondary: '#CFC5C1',
      third: '#FBFF12',
      dark: '#000000', //#070707
      gray: '#4F4A43',
      soft: '#0C0F0A'
     },
     screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      'xxl': '1440px',
      // => @media (min-width: 1440px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      fredoka: ['Fredoka One', 'cursive'],
    },
     extend: {
      backgroundImage: theme => ({
       'profile': "url('/asset/img/profile.jpg')",
       'resume': "url('/asset/img/blob-1.svg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
