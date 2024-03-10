/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],

  theme: {
    colors: {
      black: "#000000",
      white: "#FAFAFA",
      gray: "#27272A",
      "gray-light": "#A1A1AA",
      red: "#7F1D1D",
      green: "#04D361",
      yellow: "#FBA94C",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        "img-cover": "url('/background.png')",
      },
    },
  },

  plugins: [],
};
