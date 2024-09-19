module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Purging unused styles
  darkMode: false, // Disable dark mode (you can set to 'media' or 'class' to enable)
  theme: {
    extend: {},
  },
  variants: {
    extend: {}, // Extend variants here if needed
  },
  plugins: [],
};
