const plugin = require('tailwindcss/plugin');
const colors = require('./colors');

module.exports = plugin(function ({ addComponents }) {
  const skipLink = {
    '.skip-link': {
      backgroundColor: colors['primary'],
      borderRadius: '3px',
      color: colors.white,
      clip: 'rect(1px, 1px, 1px, 1px)',
      display: 'block',
      height: '1px',
      left: '1rem',
      overflow: 'hidden',
      padding: '0.75rem 1rem',
      position: 'absolute',
      top: '1rem',
      width: '1px',
      zIndex: '999',
    },
    '.skip-link:focus': {
      clip: 'auto',
      height: 'auto',
      overflow: 'visible',
      width: 'auto',
    },
  };
  addComponents(skipLink);
});
