import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#F9F5FF",
          DEFAULT: "#7C3AED",
          dark: "#5B21B6",
          soft: "#E9D5FF",
          accent: "#A855F7",
        },
      },
    },
  },
  plugins: [],
};

export default config;
