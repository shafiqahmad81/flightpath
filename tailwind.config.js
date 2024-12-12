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
        "text-color": "var(--black)",
        "text-color-alt": "var(--off-black)",
        "button-color": "var(--orange)",
        "button-rollover-color": "var(--light-orange)",
        "header-background": "var(--dark-orange)",
      },
    },
  },
  plugins: [],
};
