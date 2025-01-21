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
        'primary': '#000000',
        'secondary': "#FFBA1A",
        'tertiary': '#51B27E',
        'green': "#51B27E",
        'para': "#696969",
        'gray': "#696969",
         

      },
      
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        growShrink: {
          '0%': { transform: 'scale(1)', color: '#078954' },
          '50%': { transform: 'scale(1.5)', color: '#05b045' },
          '100%': { transform: 'scale(1)', color: '#078954' },
        },
        darkLight: {
          '0%, 100%': { backgroundColor: '#D9AA1A' }, // Light color
          '50%': { backgroundColor: '#B8860B' }, // Dark color
        },
      },
      animation: {
        growShrink: 'growShrink 0.1s infinite',
        blink: 'blink 0.3s infinite',
        darkLight: 'darkLight 0.5s infinite', // Define the animation duration
      },
    },
  },
  plugins: [],
};
