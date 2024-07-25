/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFB400",
        secondary: "#ffb400",
        background: "#f0f0f6",
      },
    },
  },
  plugins: [],
};
