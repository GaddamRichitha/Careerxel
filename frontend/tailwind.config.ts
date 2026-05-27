import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1832",
        night: "#1A1F2E",
        navy: "#14182A",
        panel: "#232A3E",
        line: "#3D4A6B",
        paper: "#F4F6FB",
        cloud: "#FBFCFE",
        accent: "#4A8BFF",
        accentDark: "#2A5FD9",
        mist: "#A0AAC0"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
        serif: ["Fraunces", "Georgia", "serif"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(74, 139, 255, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
