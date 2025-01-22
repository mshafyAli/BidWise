// tailwind.config.js or tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E32049",
        secondary: "#FFBA1A",
        tertiary: "#51B27E",
        darkGray: "#363636",
        green: "#51B27E",
        para: "#696969",
        gray: "#696969",
      },
      backgroundImage: {
        AwardBg: "url('/AwardBg.webp')",
        AboutBg: "url('/src/assets/AboutBg.svg')",
        servicesHero: "url('/src/assets/serviceshero.jpeg')",
      },

      keyframes: {
        "carousel-move": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "carousel-move": "carousel-move var(--duration, 20s) linear infinite",
        "carousel-moveMd": "carousel-move var(--duration, 50s) linear infinite",
      },
    },
  },
  plugins: [],
};
