const colors = require('tailwindcss/colors')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#D31818',
      white: '#FFFFFF',
      secondary: '#CFC5C1',
      third: '#A15443',
      dark: '#000000', //#070707
      gray: '#4F4A43',
      soft: '#758C90'
     },
     extend: {
      backgroundImage: theme => ({
       'profile': "url('/asset/img/profile.jpg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
