/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Fredoka', 'sans-serif'],
        'body': ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
