module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        popIn: {
          "0%": {
            transform: "translateY(1em)",
            opacity: "10%",
          },
          "60%": {
            transform: "translateY(-0.5em)",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "100%",
          },
        },
      },
      animation: {
        popIn: "popIn 0.5s ease-in-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
