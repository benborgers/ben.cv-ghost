module.exports = {
  content: ["./**/*.hbs", "./assets/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
