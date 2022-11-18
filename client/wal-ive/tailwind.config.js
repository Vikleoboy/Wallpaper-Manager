/** @type {import('tailwindcss').Config} */

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
      },
    ],
  },
  plugins: [require("daisyui")],
};
