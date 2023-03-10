/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // mobile images
        "hero-img-mobile": "url('../assets/images/mobile/image-hero.jpg')",
        "info-img-mobile": "url('../assets/images/mobile/image-interactive.jpg')",

        // desktop images
        "hero-img-desktop": "url('../assets/images/desktop/image-hero.jpg')",
        "info-img-desktop": "url('../assets/images/desktop/image-interactive.jpg')",
      },
    },
    fontFamily: {
      alata: ["Alata", "sans-serif"],
      "josefin-sans": ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};
