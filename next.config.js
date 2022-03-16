const withPWA = require('next-pwa');
require('dotenv').config();

module.exports = (phase, { defaultConfig }) => {
  return withPWA({
    distDir: 'build',
    pwa: {
      dest: 'public'
    },
    ...defaultConfig,
    env: {
      BASE_URL: process.env.REACT_APP_BASE_URL
    },
    typescript: {
      ignoreDevErrors: false
    },
    compress: true,
    generateEtags: false,
    images: {
      domains: []
    }
  });
};
