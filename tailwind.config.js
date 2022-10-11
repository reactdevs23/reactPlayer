module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        blackColor: "rgb(30, 30, 30)",
        grayColor: "rgba(100,100,100)",
        trackBg: "lightblue",
        animateTackBg: "rgb(204, 204, 204)",
        hoverColor: "rgb(222, 222, 255)",
        navIconhoverBg: "rgb(222, 222, 255)",
        navButtonBorderColor: "rgb(65, 65, 65)",
      },
      keyframes: {
        wheel: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: " rotate(360deg)",
          },
        },
      },
      animation: {
        "rotating-image": "wheel 10s linear infinite",
      },
    },
  },
  plugins: [],
};
