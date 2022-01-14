const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './react-bricks/**/*.tsx',
    './node_modules/react-bricks-ui/**/*.js',
  ],
  darkMode: 'class',
  theme: {},
}
