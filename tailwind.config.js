/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'green': 'hsl(75, 94%, 57%)',
        'white': 'hsl(0, 0%, 100%)',
        'grey': 'hsl(0, 0%, 20%)',
        'dark-grey': 'hsl(0, 0%, 10%)',
        'off-black': 'hsl(0, 0%, 8%)',
      },

      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
      
    },
  },
  plugins: [],
}