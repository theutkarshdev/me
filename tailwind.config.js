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
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: {
          orange: "#f75022",
          orangeFade: "#F67D4A",
          darktheme: "#1F1F1F",
          lighttheme: "#F2F2F2",
          dcard: "#303030",
          lcard: "#FFFFFF",
          dshadow: "11px 10px 38px hsla(0, 0%, 0%, 38%)",
          lshadow: "11px 10px 38px hsla(0, 0%, 0%, 12%)",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
