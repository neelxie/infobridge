import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F2A43",
          dark: "#081826",
          light: "#1F4A6E",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#0E7C74",
          dark: "#0A5F59",
          light: "#4FA79E",
          foreground: "#FFFFFF",
        },
        background: "#F7F8F7",
        surface: "#FFFFFF",
        heading: "#568259",
        body: "#33414F",
        muted: "#64748B",
        border: "#E2E6EA",
        success: "#1B8A5A",
        warning: "#B45309",
        error: "#B3261E",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "1280px",
        prose: "68ch",
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "8px",
        md: "8px",
        lg: "12px",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(11, 27, 43, 0.05)",
        card: "0 1px 3px 0 rgba(11, 27, 43, 0.07), 0 1px 2px -1px rgba(11, 27, 43, 0.06)",
        raised: "0 4px 16px -4px rgba(11, 27, 43, 0.12)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
