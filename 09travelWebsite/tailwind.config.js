/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('./assets/images/img-home.jpg')",
        'hero-video': "url('./assets/videos/video-2.mp4')",

      }
    },
  },
  plugins: [],
}