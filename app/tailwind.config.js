module.exports = {
  content: [
    './public/index.html',
    './src/pages/**/*.tsx',
    './src/**/*.tsx',
    './public/stylesheets/**/*.css',
  ],
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      colors: {
        marcha: '#F65E44',
        marchaDark: '#dd553d',
        grey: '#f9f9f9',
        transparent: 'transparent',
        current: 'currentColor',
      },
    },
  },
}
