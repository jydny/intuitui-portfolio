/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#FFFFFF",
        muted: "#767676",
        hairline: "#E3E3E1",
        wine: {
          DEFAULT: "#5C1A3B",
          hover: "#3F1128",
        },
        olive: {
          DEFAULT: "#A9C50E",
          soft: "#DCE9A3",
        },
        navy: "#22265C",
        teal: "#0F6B5C",
        gold: "#E8B400",
        crimson: "#C0392B",
        graychip: "#8C8C8C",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        page: "1280px",
      },
    },
  },
  plugins: [],
};
