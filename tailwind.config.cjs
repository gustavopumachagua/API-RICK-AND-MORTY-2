/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "282px",
      md: "538px",
      lg: "912px",
      xl: "1280px",
    },
    extend: {
      colors: {
        /*LIGHT*/
        primary: "#181818",
        bodyLight: "#F5EFE6",
        cardLight: "#FF74B1",
        /*DARK*/
        secondary: "#F2F2F2",
        bodyDark: "#181818",
        cardDark: "#3F0071",
      },
    },
  },
  plugins: [],
};
