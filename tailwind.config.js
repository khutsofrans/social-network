/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "story": "url('/public/img/Snapchat-1175385830.jpg')"
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans serif'],
    },
  },
  plugins: [],
}
