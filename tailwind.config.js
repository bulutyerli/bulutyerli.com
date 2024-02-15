/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero_pattern: "url('../assets/wave.svg')",
        poly: "url('../assets/poly.svg')",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        title: ["var(--font-spartan)"],
      },
      animation: {
        ["infinite-slider-100"]: "infiniteSlider 200s linear infinite",
        ["bounce"]: "bounceAnimation 15s infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        bounceAnimation: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(15%)" },
        },
      },
    },
  },
  plugins: [],
};
