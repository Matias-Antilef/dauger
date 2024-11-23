/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        terciary: "var(--terciary)",
        black: "var(--black)",
        black2: "var(--black2)",
        white: "var(--white)",
        white2: "var(--white2)",
      },
    },
  },
  plugins: [],
};
