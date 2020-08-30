/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
// const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      stage: 1
    },
    'autoprefixer': {},
    'postcss-nested': {}
  }
};
