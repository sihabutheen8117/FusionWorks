/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width : {
        '1/50' : '2%',
      },
      height : {
        '1/50' : '2%',
      },
    },
  },
  plugins: [],
}

