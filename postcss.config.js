require('dotenv').config();

const enablePurge = process.env.ENABLE_PURGE || false;

const purgeCss = {
  '@fullhuman/postcss-purgecss': {
    content: [
      './src/**/*.{js,ts,jsx,tsx}'
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  }
};

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss': {},
    'postcss-preset-env': {
      stage: 1,
      features: {
        'focus-within-pseudo-class': false
      }
    },
    ...(enablePurge ? purgeCss : {})
  }
};
