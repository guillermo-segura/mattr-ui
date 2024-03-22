/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'mattr-blue-light': '#F0F0FF',
        'mattr-blue': '#2f29fc',
        'mattr-blue-dark': '#17147e',
        'mattr-grey-dark': '#333233',
        'mattr-grey': '#635E61',
      },
    },
  },
  plugins: [],
}

