const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins:[plugin(function ({ addComponents, theme }) {
    addComponents({
      '.container': {
        maxWidth: theme('columns.7xl'),
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: theme('spacing.4'),
        paddingRight: theme('spacing.4')
      }
    })
  }),
  require("daisyui")],
}
