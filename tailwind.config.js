/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        hero_pattern: "url('../assets/wave.svg')",
        poly: "url('../assets/poly.svg')",
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        title: ['var(--font-spartan)'],
      },
      animation: {
        ['infinite-slider-100']: 'infiniteSlider 200s linear infinite',
        ['bounce']: 'bounceAnimation 10s infinite',
      },
      keyframes: {
        infiniteSlider: {
          '0%': { transform: 'translateX(0)' },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        bounceAnimation: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(15%)' },
        },
      },
    },
  },
  plugins: [typography],
};
