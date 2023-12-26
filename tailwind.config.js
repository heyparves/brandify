/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./sections/**/*.{html,js,jsx}",
    "./styles/**/*.{js,jsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        spread: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        primary: "#0044E3",
        secondary: "#C4DDFF",
        dark: "#112B3C",
        white: "#ffff",
        transparent: "transparent",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
    },
  },
  plugins: [],
};
