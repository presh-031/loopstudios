/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // mobile images
        "hero-img-mobile": "url('../assets/images/mobile/image-hero.jpg')",
        "info-img-mobile": "url('../assets/images/mobile/image-interactive.jpg')",

        "deep-earth": "url('../assets/images/mobile/image-deep-earth.jpg')",
        "night-arcade": "url('../assets/images/mobile/image-night-arcade.jpg')",
        "soccer-team": "url('../assets/images/mobile/image-soccer-team.jpg')",
        grid: "url('../assets/images/mobile/image-grid.jpg')",
        "from-above": "url('../assets/images/mobile/image-from-above.jpg')",
        "pocket-borealis": "url('../assets/images/mobile/image-pocket-borealis.jpg')",
        curiosity: "url('../assets/images/mobile/image-curiosity.jpg')",
        fisheye: "url('../assets/images/mobile/image-fisheye.jpg')",
      },
    },
    fontFamily: {
      alata: ["Alata", "sans-serif"],
      "josefin-sans": ["Josefin Sans", "sans-serif"],
    },
  },
  plugins: [],
};
