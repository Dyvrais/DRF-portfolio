/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackyel: "#141411",
        waryellow: "#ffc129",
        warblue: "#15397a",
        wattle: {
          50: "#f9fbeb",
          100: "#f3f6cb",
          200: "#eaee9a",
          300: "#e3e460",
          400: "#ddd840",
          500: "#cbbf27",
          600: "#af981f",
          700: "#8c711c",
          800: "#755b1e",
          900: "#644c1f",
          950: "#3a280e",
        },
      },
      fontFamily: {
        spartan: "League Spartan",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
