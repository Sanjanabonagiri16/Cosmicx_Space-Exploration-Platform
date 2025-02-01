import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        themes: {
          galactic: {
            primary: "#0EA5E9",
            secondary: "#33C3F0",
            accent: "#60A5FA",
            background: "#0F172A",
            text: "#E2E8F0"
          },
          nebula: {
            primary: "#9b87f5",
            secondary: "#7E69AB",
            accent: "#D6BCFA",
            background: "#1A1B3B",
            text: "#E9D8FD"
          },
          martian: {
            primary: "#ea384c",
            secondary: "#ef4444",
            accent: "#f87171",
            background: "#451A1A",
            text: "#FEE2E2"
          }
        }
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "twinkle": "twinkle 4s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "parallax": "parallax 20s linear infinite",
        "orbit": "orbit 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        glow: {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(107, 70, 193, 0.5)",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(107, 70, 193, 0.8)",
            transform: "scale(1.02)"
          },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(150px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(150px) rotate(-360deg)" },
        },
        parallax: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
