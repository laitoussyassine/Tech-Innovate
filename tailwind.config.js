/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        btnBg: "#4770c4",
        mainColor: "#c9f31d",
        inputBg: "#1f1f1f",
        inputbgFocus: "#070707",
        textSecond: "#9c9c9c",
        navbarBg: "#262626"
      }
    },
  },
  plugins: [],
};
