require('dotenv').config();

const enablePurge = process.env.ENABLE_PURGE || false;

module.exports = {
  purge: {
    enabled: enablePurge,
    content: [
      './src/**/*.html',
      './src/**/*.scss',
      './src/**/*.{js,ts,jsx,tsx}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:  {
      display: [
        'Lato',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Arial',
        'sans-serif'
      ],
      body: [
        'Lato',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Arial',
        'sans-serif'
      ],
    },
    minWidth: {
      '0': '0',
      '1/5': '20%',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    minHeight: {
      '100px': '6.25rem',
      '200px': '12.5rem',
      '300px': '18.75rem'
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [],
  important: true
};
