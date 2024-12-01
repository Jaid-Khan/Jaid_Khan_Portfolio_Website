/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  css: ["./src/output.css"],
  theme: {
    extend: {
      // Custom Shadow 
      dropShadow: {
        'character-shadow': '2px 2px 20px #000000', // X-axis, Y-axis, blur, color
      },

      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'], // Define your custom font here
      },
    },
  },
  plugins: [],
}

