module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      inset: {
        negative48: '-48px',
      },
    }, // use of extend is to add some additional properties keeping the original config intact.
    colors: {
      primary: {
        black: '#000000',
        white: '#FFFFFF',
        red: {
          persian: '#d32f2f',
        },
        blue: {
          midnight: '#002171',
          magnus: '#003c8f',
        },
      },
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
