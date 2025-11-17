/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fp: {
          green: "#65B32E",
          greenLight: "#F1FBD8",
          pink: "#FB7185",
          mango: "#FDBA4D",
          dark: "#0F172A",
          offWhite: "#FFFDF7",
        },
      },
      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
