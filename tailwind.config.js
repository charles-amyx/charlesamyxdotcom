const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('./tailwind/colors');
const spacing = require('./tailwind/spacing');

module.exports = {
  content: ['./src/**/*.njk', './src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
        display: ['Playfair Display'],
      },
      fontSize: {
        48: '48px',
      },
      spacing,
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(.5,0,.2,1)',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('./tailwind/skip-link'),
    require('@tailwindcss/typography'),
  ],
};
