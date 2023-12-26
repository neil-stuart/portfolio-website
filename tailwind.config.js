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
              borderRadius: "1.05rem", // Adjust the radius as needed
            },
            hr: {
              borderColor: '#f97316', // Replace 'yourColorHere' with the desired color
            }
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
