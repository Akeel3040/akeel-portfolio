/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ['"Space Grotesk"', "Inter", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        dark: {
          void: "#050608",
          bg: "#07090B",
          surface: "#0D1117",
          elevated: "#121720",
          card: "#151B26",
          border: "rgba(255, 255, 255, 0.08)",
          "border-subtle": "rgba(255, 255, 255, 0.04)",
        },
        ice: {
          DEFAULT: "#9FC4D0",
          light: "#C5DEE6",
          muted: "rgba(159, 196, 208, 0.4)",
          glow: "rgba(159, 196, 208, 0.15)",
        },
        gold: {
          DEFAULT: "#C9A96A",
          light: "#E1C48B",
          dark: "#9E8148",
          glow: "rgba(201, 169, 106, 0.2)",
        },
        steel: {
          50: "#F4F6F8",
          100: "#E5E9EE",
          200: "#C9D2DC",
          300: "#9FB0C3",
          400: "#758EA7",
          500: "#55728F",
          600: "#3F5670",
          700: "#2C3D51",
          800: "#1A2635",
          900: "#0F1722",
        },
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 8s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A96A 0%, #E1C48B 50%, #9E8148 100%)",
        "radial-fog": "radial-gradient(circle at 50% 50%, rgba(159, 196, 208, 0.08) 0%, rgba(7, 9, 11, 0) 70%)",
        "radial-spotlight": "radial-gradient(ellipse at 50% 0%, rgba(159, 196, 208, 0.12) 0%, rgba(7, 9, 11, 0) 65%)",
      },
    },
  },
  plugins: [],
}
