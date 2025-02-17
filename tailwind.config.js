/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-hover': '0 10px 100px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.5)',
      },
    },
  },
  plugins: [],
}