/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        open: ['"Open Sans", sans-serif'],
        inter: ['"Inter", sans-serif'],
      },
      colors: {
        "off-black": "hsl(var(--off-black))",
        orange: {
          DEFAULT: "hsl(var(--orange))",
          50: "hsl(var(--light-orange-hover))",
          100: "hsl(var(--light-orange))",
          750: "hsl(var(--dark-orange-alt))",
          900: "hsl(var(--dark-orange))",
        },
        theme: {
          DEFAULT: "hsl(var(--theme-color))",
          100: "hsl(var(--theme-color-light))",
        },
      },
    },
  },
  plugins: [],
};
