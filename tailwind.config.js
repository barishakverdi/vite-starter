/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './src/views/**/*.{html,js}',
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px"
      },

      colors: {
        primary: "#137ff2",
        dark: "#091929",
        light: "#dcdfe3",
        text: "#545557",
        white: "#FFFFFF",
        black: "#000000"
      },

      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

