/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "14px",
    },
    extend: {
      colors: {
        primary: "rgb(14 165 233)",
        secondary: "rgb(100 116 139)",
        dark: "rgb(15 23 42)",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
