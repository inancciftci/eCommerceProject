/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem", // optional, centers the container horizontally
        screens: {
          sm: "640px", // max-width for small screens
          md: "768px", // max-width for medium screens
          lg: "1024px", // max-width for large screens
          xl: "1300px", // max-width for extra large screens
        },
      },
    },
  },
  plugins: [],
};
