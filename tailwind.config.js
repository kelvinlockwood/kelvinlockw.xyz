module.exports = {
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        myred: {
          500: '#c44356',
          800: '#8b323f',
        },
        mydark: {
          100: '#232d2c',
          300: '#182624',
          500: '#14211e',
        },
        mygray: {
          500: '#313E3D',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-debug-screens'),
  ],
  purge: ['./src/**/*.js', './src/**/*.njk', './src/**/*.svg'],
}
