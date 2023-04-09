/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#F80F60",
          blue: "#0E0A2D",
          font: "#888888",
          darkBlue: "#070019",
        },
      },
      fontFamily: {
        altoneRegular: ["altoneRegular", "sans-serif"],
        altoneBold: ["altoneBold", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
