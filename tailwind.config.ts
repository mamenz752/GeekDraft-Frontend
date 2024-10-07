import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "geek-purple-20": "#9D72F2",
        "geek-purple-40": "#7C43EE",
        "geek-purple-60": "#5E17EB",
        "geek-purple-80": "#4910BB",
        "geek-purple-100": "#370C8C",
        "geek-orange-20": "#F2BD72",
        "geek-orange-40": "#EEA743",
        "geek-orange-60": "#EB9617",
        "geek-orange-80": "#BB7410",
        "geek-orange-100": "#8C570C",
        "geek-red-20": "#F27272",
        "geek-red-40": "#EE4343",
        "geek-red-60": "#EB1717",
        "geek-red-80": "#BB1010",
        "geek-red-100": "#8C0C0C",
        "geek-green-20": "#08F066",
        "geek-green-40": "#03E75E",
        "geek-green-60": "#02B84B",
        "geek-green-80": "#018235",
        "geek-green-100": "#015020",
        "geek-blue-20": "#72BBF2",
        "geek-blue-40": "#43A4EE",
        "geek-blue-60": "#178CEB",
        "geek-blue-80": "#1071BB",
        "geek-blue-100": "#0C558C",
        "geek-pink-20": "#F272A7",
        "geek-pink-40": "#EE438A",
        "geek-pink-60": "#EB176F",
        "geek-pink-80": "#BB1057",
        "geek-pink-100": "#BB1057",
        "geek-gray-20": "#BABABA",
        "geek-gray-40": "#A0A0A0",
        "geek-gray-60": "#888888",
        "geek-gray-80": "#6D6D6D",
        "geek-gray-100": "#6D6D6D",
        "geek-black": "#191919",
      },
      fontFamily: {
        noto: ['var(--font-noto)'],
        "m-plus": ["M PLUS 1", "sans-serif"],
      },
      backgroundImage: {
        "geek-purple-btn-gradient": 'linear-gradient(to right, #9D72F2, #5E17EB)',
        "geek-white-btn-gradient": 'linear-gradient(to right, #FAFAFA, #EDEDED)'
      },
    },
  },
  plugins: [],
};
export default config;
