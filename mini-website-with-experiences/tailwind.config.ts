import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "jpl-red": "#E31937",
        "jpl-red-light": "#E73B54",
        "jpl-red-dark": "#C1152E",
        "jpl-red-darker": "#5C0411",
        "jpl-aqua": "#489FDF",
        "jpl-blue": "#8BCBFA",
        "jpl-dark-blue": "#004562",
        "jpl-jpl-green": "#14C97A",
        "jpl-off-white": "#FAFAFA",
        "jpl-gray-light": "#F5F5F5",
        "jpl-gray-light-mid": "#D8D8D8",
        "jpl-gray-mid": "#949494",
        "jpl-gray-mid-dark": "#6F6F6F",
        "jpl-gray-dark": "#222222",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "bg-color-nimation": "spin 3s linear forwards",
      },
      keyframes: {
        "bg-color-nimation": {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "0 100%" },
        },
      },
    },
  },
  plugins: [nextui()],
};
export default config;
