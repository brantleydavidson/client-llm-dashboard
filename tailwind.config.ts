/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Scan these folders for Tailwind classes:
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
};
