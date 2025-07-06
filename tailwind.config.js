/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        instagram: {
          blue: '#0095f6',
          purple: '#8a3ab9',
          pink: '#e95950',
          yellow: '#fccc63',
          orange: '#ff7e29',
          lightgray: '#fafafa',
          border: '#dbdbdb',
          text: '#262626',
          secondaryText: '#8e8e8e'
        }
      }
    },
  },
  plugins: [],
}

