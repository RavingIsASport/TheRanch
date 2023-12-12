module.exports = {
  content: ["./src/**/*.{.html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        first: "#00830E",
        second: "#88AE7F",
        third: "#DEF8D6",
        fourth: "#79B1E0",
        fifth: "#3F4A3C",
      },
      fontFamily: {
        Amatic: ["Amatic SC, sans-serif"],
        Lora: ["Lora, serif"],
        RobotoSlab: ["Roboto Slab, serif"],
      },
      keyframes: {
        title: {
          "0%": {
            transform: "translateX(-1000px)",
            opacity: "0",
          },
          "50%": {
            transform: "translateX(-500px)",
            opacity: ".5",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
      },
    },
    animation: {
      title: "title 1800ms linear both",
    },
  },
  plugins: [],
};
