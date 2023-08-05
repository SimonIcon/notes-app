/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");
module.exports = withMT({
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [],
})