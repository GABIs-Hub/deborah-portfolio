/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#04070F",
          900: "#0A0F1E",
          800: "#0F1729",
          700: "#162035",
          600: "#1E2C47",
          500: "#2A3D5C",
        },
        gold: {
          300: "#E8D4A8",
          400: "#D4B87A",
          500: "#C9A96E",
          600: "#B8944A",
          700: "#9A7833",
        },
        cream: "#F7F3EC",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-right": "slideRight 0.7s ease forwards",
        "counter": "counter 2s ease forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "line-grow": "lineGrow 1.2s ease forwards",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideRight: {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        lineGrow: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
      },
    },
    transitionDuration: {
      '350': '350ms',
      '400': '400ms',
    },
  },
  plugins: [],
};
