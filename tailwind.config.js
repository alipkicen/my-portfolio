/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      mono: ["var(--font-geist-mono)", "var(--font-jetbrains-mono)", "monospace"],
    },
    extend: {
      colors: {
        // Near-black warm base, layered surfaces
        ink: {
          DEFAULT: "#0a0a0b",
          900: "#0a0a0b",
          800: "#111113",
          700: "#16161a",
          600: "#1c1c21",
        },
        line: "#26262b",
        "line-soft": "#1d1d22",
        fg: {
          DEFAULT: "#ededee",
          muted: "#a1a1aa",
          faint: "#71717a",
        },
        // Single locked accent: warm amber/copper
        accent: {
          DEFAULT: "#e8b974",
          soft: "#cfa05c",
          dim: "#8a6a39",
        },
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        lg: "14px",
        md: "10px",
        sm: "6px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 32s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
