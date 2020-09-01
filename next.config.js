const withCSS = require('@zeit/next-css');
const withPWA = require('next-pwa');
require('dotenv').config();

module.exports = (phase, { defaultConfig }) => {
  return withPWA({
    distDir: 'build',
    pwa: {
      dest: 'public'
    },
    ...withCSS({
      ...defaultConfig,
      distDir: 'build',
      typescript: {
        ignoreDevErrors: false
      },
      env: {
        BASE_URL: process.env.REACT_APP_BASE_URL
      }
    })
  });
};
