/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html",
  "./src/**/*.js",
  ],
  theme: {
    fontFamily:{
      pacifico:['Pacifico', 'cursive'],
    },
    extend:{
      colors: {
        customBrown1: '#4B2C24',
        customBrown2: '#2B1712',
        golden: "#DDB66F",
        customBrown3: '#492D26'
      },
      backgroundImage:{
        'coffe_patterns': "url('./assets/bcof.png')"
      }
    }
  },
  plugins: [],
}