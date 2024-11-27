/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#1F2937",
        accent: "#60A5FA",
        background: {
          DEFAULT: "#111827",
          secondary: "#1F2937",
        },
        text: {
          primary: "#F9FAFB",
          secondary: "#D1D5DB",
        },
      },
      boxShadow: {
        custom: "0 0 0 2px rgba(59, 130, 246, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
