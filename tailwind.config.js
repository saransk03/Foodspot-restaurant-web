/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          'moonrocks': ['Rubik Moonrocks', 'sans-serif'], // Define your custom font here
        },
      },
    },
    plugins: [],
  }