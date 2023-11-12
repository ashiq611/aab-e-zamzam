/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       backgroundImage: {
        'hero-pattern': "url('./src/assets/zamzam/WhatsApp-Image-2023-03-26-at-4.07.26-PM.jpeg')",
        'secondary-pattern': "url('./src/assets/zamzam/download-2.jpeg"
        
    },
  },
  plugins: [],
}}
