/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
       DEFAULT: '10px',
       sm: '10px',
       lg: '20px',
       xl: '20px',
       '2xl': '20px',
     },
   },
    extend: {},
  },
  plugins: [],
}