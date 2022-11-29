module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    colors: {
      inherit: "inherit",
      transparent: "transparent",
      currentColor: "currentColor",
      gray: "#F6F6F6",
      black: "#000000",
      white: "#FFFFFF",
      "bright-green": "#01CF95",
      green: "#03614B",
    },
    extend: {
      boxShadow: {
        main: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        raleway: ["Raleway", "Arial", "sans-serif"],
        inter: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
};
