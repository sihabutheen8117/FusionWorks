/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], 
      },
      colors: {
        zinc: {
          790: '#333336', 
        },
      },
      
    }
  },
  plugins: [],
}

