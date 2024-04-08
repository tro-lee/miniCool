const path = require("path");
const MiniCss = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "hi.js",
    path: path.resolve(__dirname, "./dist"),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCss.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCss()],
};
