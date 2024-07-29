/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },

      colors: {
        primary: {
          DEFAULT: "#ee626b",
        },
        secondary: {
          DEFAULT: "#0071F8",
        },
        "lx-gray": {
          DEFAULT: "#eeeeee",
          '400': '#f7f7f7',
          '500': '#e7e7e7',
          '800': '#aaaaaa',
          '900': '#4a4a4a',
        },
      },

      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1310px",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        icomoon: ["icomoon"],
      },
    },
  },
  plugins: [],
};
