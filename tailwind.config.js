/** @type {import('tailwindcss').Config} */
const { colors } = require("tailwindcss/defaultTheme");

export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        ibm_plex_sans: ["IBM Plex Sans", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      boxShadow: {
        sidebarIcon: "-4px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      transitionProperty: {
        "transform-opacity-color": "transform, opacity, color",
      },
      colors: {
        customBlue: "#2360ec",
        ...colors,
      },
    },
  },
  plugins: [],
};
