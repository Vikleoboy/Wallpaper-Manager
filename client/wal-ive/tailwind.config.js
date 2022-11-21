/** @type {import('tailwindcss').Config} */

const { primary } = require("daisyui/src/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {},
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8AE3FF",
          secondary: "#D3F5FF",
          accent: "#8F93FB",
          neutral: "#3d4451",
          "base-100": "#F2FCFF",
        },

        newtheme: {
          "base-100": "#424549",
          primary: "#282b30",
          secondary: "#36393e",
          neutral: "#5865F2",
          accent: "#F6F6F6",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
