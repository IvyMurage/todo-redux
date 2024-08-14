/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        frame: "#F2B5D4",
        todoContainer: "#42213D",
      },
      maxWidth: {
        "4/5": "80%",
        '1/2': '50%'
      },
      spacing: {},
      borderWidth: {
        1: "0.063rem",
      },
    },
  },
  plugins: [],
};
