import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "16": "repeat(16, minmax(0, 1fr))",
        "24": "repeat(24, minmax(0, 1fr))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        intro: {
          "0%": { opacity: "0", transform: "translateX(0) scale(0)" },
          "100%": { opacity: "1", transform: "translateX(0) scale(1)" },
        },
        "intro-left": {
          "0%": { opacity: "0", transform: "translateX(0) scale(0)" },
          "100%": { opacity: "1", transform: "translateX(-50px) scale(1)" }, // Adjust -50px to your need
        },
        "intro-right": {
          "0%": { opacity: "0", transform: "translateX(0) scale(0)" },
          "100%": { opacity: "1", transform: "translateX(50px) scale(1)" }, // Adjust 50px to your need
        },
      },
      animation: {
        intro: "intro 2s ease-in-out",
        "intro-left": "intro-left 2s ease-in-out",
        "intro-right": "intro-right 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
