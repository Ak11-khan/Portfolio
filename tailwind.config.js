/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FFFFFF',
          100: '#FAF7F2',
          200: '#F9F2E9',
          400: '#E4D6C2',
          500: '#D2C2AD',
          600: '#BFAF9A',
          700:'#8F9779',
        },
        customPalette: {
          // Colors from the uploaded image
          purpleBlue: '#4a578a', // For navigation bar or other strong elements
          lightPurple: '#c78abf', // For buttons or highlighting important elements
          lightBlue: '#bde0f6',   // Secondary buttons or backgrounds
          beigePink: '#d6a8a8',   // Card backgrounds or section highlights
          deepBlue: '#4f88c6',    // For strong elements like primary buttons
          lightBeige:'#FAF7F2',
          darkPurple:'#270F8B',
        },
        purple: {
          // Colors from the uploaded image
          purpleBlue: '#4a578a', // For navigation bar or other strong elements
          lightPurples: '#893DFE', // For buttons or highlighting important elements
          lightPurple: '#777DCC', // For buttons or highlighting important elements
          lightBlue: '#bde0f6',   // Secondary buttons or backgrounds
          beigePink: '#d6a8a8',   // Card backgrounds or section highlights
          lighterBlue: '#537FDA',    // For strong elements like primary buttons
          lightBeige:'FAF7F2',
        },
      }
    },
  },
  plugins: [],
}

