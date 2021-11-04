module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#202224',
        'btn': '#e8694f',
        'yellow-400': '#f2c329',
        'secondary':'#0F0F0F',
        'pruebaA': '#5C7AEA',
        'pruebaA2':'#112031',
        'pruebaA3':'#353232',
        'pruebaA4':'#171310',
        'pruebaA5':'#d8ce98'
      }),
      gradientColorStops: theme => ({
        ...theme('colors'),
        'primary': '#202224',
        'secondary':'#0F0F0F'
        
      }),
      fontFamily: {
        test: ['Heebo', 'sans-serif']
      }
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'mdh':{
        'raw':'(min-height: 900px)'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
