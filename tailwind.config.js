module.exports = {
  content: ["./src/**/*.{.html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        main: "#5A8F7B",
      },
      fontFamily: { Courgette: ["Courgette", "cursive"] },
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
