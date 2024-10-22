/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // personal colors bantae hai
      colors: {
        EAT: "#F97920",
      },
      // personal screen sizes bantae hai
      screens: {
        xs: "375px", // => @media (min-width: 375px) { ... }
        md: "870px", // => @media (min-width: 870px) { ... }
        lg: "1030px", // => @media (min-width: 1230px) { ... }
        xl: "1230px", // => @media (min-width: 1230px) { ... }
      },
    },
  },
  plugins: [],
};
