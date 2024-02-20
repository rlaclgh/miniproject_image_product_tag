import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        blue: "#0079FF",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#00DFA2",
        yellow: "#F6FA70",
        red: "#FF0060",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#ececec",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      extend: {
        spacing: {
          "128": "32rem",
          "144": "36rem",
        },
        borderRadius: {
          "4xl": "2rem",
        },
      },
    },
  },
  plugins: [],
};
export default config;
