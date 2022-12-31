/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // mobile images
        "hero-img-mobile": "url('../assets/images/mobile/image-hero.jpg')",
      },
    },
  },
  plugins: [],
};
