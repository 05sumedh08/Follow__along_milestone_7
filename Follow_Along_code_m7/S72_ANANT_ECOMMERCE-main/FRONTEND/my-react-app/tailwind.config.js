/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Correct glob pattern
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      screens: {
        "1000px": "1000px",
        "1050px": "1050px",
        "1100px": "1100px",
        "1300px": "1300px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
};
