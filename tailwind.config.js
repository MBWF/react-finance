/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-600": "#5636D3",
        "gray-200": "#969CB3",
        "gray-500": "#363F5F",
        "orange-500": "#FF872C",
        "white-100": "#FFFFFF",
        "white-200": "#E5E5E5",
      },
    },
  },
  plugins: [],
};
