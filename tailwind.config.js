const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
    './node_modules/react-bricks-ui/dist/*.js',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '480px',
      sm: '600px',
      md: '768px',
      lg: '900px',
      xl: '1200px',
      xxl: '1800px',
    },
    extend: {
      colors: {
        cyan: colors.cyan,
      },
      gradientColorStops: {
        ocean1: '#007cf0',
        ocean2: '#00dfd8',
        violet1: '#7928ca',
        violet2: '#ff0080',
        sun1: '#ff4d4d',
        sun2: '#f9cb28',
      },
      margin: {
        sm: '5.55555%',
        md: '11.11111%',
        lg: '16.66667%',
        xl: '22.22222%',
      },
      padding: {
        '1/10': '10%',
      },
      opacity: {
        10: '0.1',
      },
      fontFamily: {
        content: [
          'Nunito Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  variants: {},
  plugins: [],
}
