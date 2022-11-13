/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#D3F5FF",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#F2FCFF",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
