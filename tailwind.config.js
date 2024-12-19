/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      extend: {
        fontfamily: {
          sans: ["Poppins", "sans-serif"],
        },
        gridTemplateColumns: {
          "70/30": "70% 30%",
        },
      },
    },
  },
  plugins: [],
}
