module.exports = {
  content: ["./**/*.hbs"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Georgia", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
