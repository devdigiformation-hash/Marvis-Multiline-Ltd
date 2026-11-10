import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: "#001F49",
            light: "#0A2D64",
            dark: "#001430",
            deep: "#040D1A",
          },
          gold: {
            DEFAULT: "#C59B4E",
            light: "#E0B768",
            dark: "#A87F33",
            metallic: "#D4AF37",
          },
          surface: {
            dark: "#071224",
            light: "#F8FAFC",
            card: "#0C1B33",
          }
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
