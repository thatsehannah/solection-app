/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        "primary-foreground": "var(--color-primary-foreground)",
        "secondary-foreground": "var(--color-secondary-foreground)",
      },
      fontFamily: {
        "league-black": ["LeagueSpartan-Black"],
        "league-bold": ["LeagueSpartan-Bold"],
        "league-extrabold": ["LeagueSpartan-ExtraBold"],
        "league-extralight": ["LeagueSpartan-ExtraLight"],
        "league-light": ["LeagueSpartan-Light"],
        "league-medium": ["LeagueSpartan-Medium"],
        league: ["LeagueSpartan-Regular"],
        "league-semiboldthin": ["LeagueSpartan-SemiBoldThin"],
        "league-thin": ["LeagueSpartan-Thin"],
      },
    },
  },
  plugins: [],
};
