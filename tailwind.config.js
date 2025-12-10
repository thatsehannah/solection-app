/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#4c4b3b",
        secondary: "#f76506",
        "primary-foreground": "#d6cfbe",
      },
    },
  },
  plugins: [],
};
