const withCSS = require('@zeit/next-css');
require('dotenv').config();

module.exports = (phase, { defaultConfig }) => {
  return withCSS({
    ...defaultConfig,
    distDir: 'build',
    typescript: {
      ignoreDevErrors: false
    },
    env: {
      BASE_URL: process.env.REACT_APP_BASE_URL
    }
  });
};
