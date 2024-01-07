/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Poppins'"],
      },
      colors: {
        primary: "#072AC8",
        secondary: "#60D394",
      },
    },
  },
  plugins: [],
};
