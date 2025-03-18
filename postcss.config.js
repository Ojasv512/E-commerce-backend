module.exports = {
     plugins: [
         require('postcss-import'),
         require('tailwindcss/nesting'),
         require('tailwindcss'),
         require('autoprefixer')
     ]
     plugins: {
         '@tailwindcss/postcss': {},
         autoprefixer: {},
     }
 }
