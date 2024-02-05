import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Hanken Grotesk"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        text_primary_light: colors.slate[100],
        text_primary_dark: colors.black,
        border_light: "var(--border_Dark)",
        border_Dark: "var(--border_light)",
      },
    },
  },
  plugins: [],
};
