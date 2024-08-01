const { hairlineWidth } = require("nativewind/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    fontFamily: {
      normal: ["InterRegular"],
      semibold: ["InterSemibold"],
      bold: ["InterBold"],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        gray: {
          // light = primary-foreground default = secondary / dark = muted-foreground
          light: "#fafafa",
          DEFAULT: "#f4f4f5",
          dark: "#71717a",
        },
        // colors from tailwindcss, light = 50, DEFAULT = 500, dark = 700
        blue: {
          // actually indigo
          light: "#eef2ff",
          DEFAULT: "#6366f1",
          dark: "#4338ca",
        },
        green: {
          // actually emerald
          light: "#ecfdf5",
          DEFAULT: "#10b981",
          dark: "#047857",
        },
        purple: {
          light: "#faf5ff",
          DEFAULT: "#a855f7",
          dark: "#7e22ce",
        },
        pink: {
          light: "#fdf2f8",
          DEFAULT: "#ec4899",
          dark: "#be185d",
        },
        yellow: {
          light: "#fefce8",
          DEFAULT: "#eab308",
          dark: "#a16207",
        },
        red: {
          light: "#fef2f2",
          DEFAULT: "#ef4444",
          dark: "#b91c1c",
        },
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
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
    },
  },
  plugins: [],
};
