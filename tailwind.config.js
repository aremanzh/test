/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {   
    extend: {
      colors: {
        primary: '#325fb6',
        secondary: '#30061e',
        'primary-light': "#fbd10a",
        'secondary-dark': "#c3a000",
        'button-light': "#e15225",
        'button-dark': "#a81c00",
      },
    },
  },
  plugins: [],
}
