import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        /* DIN-Brandschutz: Signalfarbe Rot (RAL 3000 Feuerrot) */
        brand: {
          red: "#9B2423",       /* RAL 3000 Feuerrot – Feuerlöscher, Brandschutz */
          redDark: "#7D1C1B",
          redLight: "#fef2f2",
          stone: "#1c1917",
          stoneLight: "#fafaf9",
        },
        /* Hero dark: Sekundär-Button auf rotem Grund (etwas dunkler) */
        hero: {
          bg: "#1c1917",
          card: "#292524",
        },
        /* Hervorhebung auf rotem Hero-Hintergrund (creme/hell) */
        heroHighlight: "#FEF3C7",
      },
      borderRadius: {
        "hero-btn": "0.5rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
