module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "#0c0b0b", "900_01": "#000000", "900_7f": "#0000007f" },
        blue_gray: { 900: "#373636", "100_51": "#d9d9d951" },
        gray: { 900: "#1c5806" },
        white: { a700: "#fdfdfd", a700_01: "#ffffff", a700_e5: "#fdfdfde5" },
      },
      boxShadow: {},
      fontFamily: { googlesansdisplay: "Google Sans Display" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};