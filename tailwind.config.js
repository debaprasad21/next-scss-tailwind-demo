const styleConstants = require('./styles/constants.json');

module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js', './common/**/*.js'],
  theme: {
    extend: {
      inset: {
        negative48: '-48px',
      },
      minWidth: {
        '1/2': '50%',
        200: '200px',
      },
    }, // use of extend is to add some additional properties keeping the original config intact.
    colors: {
      primary: styleConstants.primary,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2.5rem',
      },
      screens: {
        md: '768px',
        lg: '1024px',
        xl: '1400px',
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
};
