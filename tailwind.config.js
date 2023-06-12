/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        metloblue: "rgb(76, 131, 237)",
        metloblueGradientEnd: "rgb(13, 101, 151)",
        metloblueHover: "rgb(76, 131, 237, 0.7)",
        dark: "rgb(16, 17, 19)",
        secondarydark: "rgb(63, 63, 65)",
        griddark: "rgb(31, 33, 35)",
      },
    },
  },
  plugins: [],
};
