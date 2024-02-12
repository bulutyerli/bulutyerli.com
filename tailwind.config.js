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
      },
      animation: {
        ["infinite-slider-100"]: "infiniteSlider 200s linear infinite",
        ["infinite-slider-75"]: "infiniteSlider 75s linear infinite",
        ["infinite-slider-50"]: "infiniteSlider 50s linear infinite",
        ["infinite-slider-25"]: "infiniteSlider 5s linear infinite",
      },
      keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
