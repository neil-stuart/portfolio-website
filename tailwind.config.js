/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            // Existing styles for prose class

            // Add rounded borders to images within the prose element
            img: {
              borderRadius: "8px", // Adjust the radius as needed
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
