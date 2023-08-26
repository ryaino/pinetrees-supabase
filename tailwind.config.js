/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4ade80",
          "secondary": "#c084fc",
          "accent": "#e08fbe",
          "neutral": "#232A2F",
          "base-100": "#f3f4f6",
          "info": "#6FA1F1",
          "success": "#22d3ee",
          "warning": "#F8BE6D",
          "error": "#E04D6D",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {

  },
  plugins: [require("daisyui")],}

