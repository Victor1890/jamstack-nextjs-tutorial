module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#E58112',
        secondary: '#EA9E49',
        'dark-blue': '#0C1F51',
        'light-primary': '#EEC292',
        'black-bg': '#0F182F',
        'light-bg': '#212A40'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
