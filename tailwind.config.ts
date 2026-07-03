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
        primary: {
          DEFAULT: "#111111",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
          foreground: "#111111",
        },
        accent: {
          DEFAULT: "#E53935",
          hover: "#C62828",
          light: "#FFEBEE",
        },
        success: {
          DEFAULT: "#22C55E",
          light: "#DCFCE7",
        },
        background: {
          DEFAULT: "#F8F9FA",
          dark: "#0A0A0A",
        },
        muted: {
          DEFAULT: "#F1F3F5",
          foreground: "#6B7280",
        },
        border: {
          DEFAULT: "#E5E7EB",
          dark: "#2A2A2A",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          dark: "#161616",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
      },
      spacing: {
        "section": "7rem",
        "section-sm": "4rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "card": "0 1px 3px rgba(0,0,0,0.05), 0 20px 40px rgba(0,0,0,0.06)",
        "card-hover": "0 1px 3px rgba(0,0,0,0.08), 0 30px 60px rgba(0,0,0,0.12)",
        "glow-red": "0 0 40px rgba(229,57,53,0.2)",
        "glow-red-sm": "0 0 20px rgba(229,57,53,0.15)",
        "inner-light": "inset 0 1px 0 rgba(255,255,255,0.1)",
        "glass": "0 8px 32px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "noise": "url('/images/noise.svg')",
        "grid-pattern": "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
        "grid-pattern-dark": "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "40px 40px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "marquee": "marquee 30s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(229,57,53,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(229,57,53,0.6)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
