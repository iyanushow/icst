module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      currentColor: "currentColor",
      black: "#000000",
      white: "#FFFFFF",
      primary: {
        100: "#00C781",
        200: "#115718",
        300: "#00873D",
        DEFAULT: "#115718",
      },
      red: "#FF4040",
      yellow: "#FFAA15",
      teal: "#00798C",
      gray: "#999999",
    },
    extend: {
      boxShadow: {
        main: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        raleway: ["Raleway", "Arial", "sans-serif"],
        inter: ["Inter", "serif"],
      },
      borderRadius: {
        DEFAULT: 15,
        lg: 100,
      },
    },
  },
  plugins: [],
};
