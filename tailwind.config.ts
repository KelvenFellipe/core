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
        background: "var(--background)",
        foreground: "var(--foreground)",
      }, 
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        '17': 'repeat(17, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-18': 'span 18 / span 18',
      },
      gridColumnStart: {
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18"
      },
      gridColumnEnd: {
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18"
      },
      fontSize: {
        xxs: '0.625rem',
      },
    },
  },
  plugins: [],
};
export default config;
