/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fde047",
      },
      fontFamily: {
        primary: ["Quattrocento"],
        secondary: ["glegoo"],
      },
    },
  },
  plugins: [require("daisyui")],
};
