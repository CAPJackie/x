import type { Config } from "tailwindcss";
import { breakpoints } from "./src/lib/breakpoints";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Mobile-first: unprefixed = mobile, `tablet:` and `desktop:` = larger screens.
    screens: {
      tablet: `${breakpoints.tablet}px`,
      desktop: `${breakpoints.desktop}px`,
    },
    extend: {
      colors: {
        "twitter-gray": "#71767b",
        "twitter-dark-gray": "#2f3336",
        "twitter-light-gray": "#b6b9bc",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
