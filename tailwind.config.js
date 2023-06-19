/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro Display", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        metloblue: "rgb(66, 89, 231)",
        metloblueGradientEnd: "rgb(13, 101, 151)",
        metlobluehover: "rgb(39, 64, 227)",
        dark: "rgb(16, 17, 19)",
        secondarydark: "rgb(63, 63, 65)",
        griddark: "rgb(31, 33, 35)",
      },
    },
  },
  plugins: [],
};
