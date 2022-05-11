module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996dff',
          500: '#8257e6',
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [ 
    require('tailwind-scrollbar')
  ],
}
