import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0E16",
        text: "#F6F8FA",
        shadows: "#004FE5",
        accent: "#201F36",
      },
    },
  },
  plugins: [],
} satisfies Config;
