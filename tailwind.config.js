/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "sugar-white": "#FDFDFA",
        "brown-sugar": "#704214",
        pistachio: "#93C572",
        orange: "#FF6600",
      },
      fontFamily: {
        yourFontName: ["Your Actual Font Name", "fallbackFont"],
      },
    },
  },
  plugins: [],
};
