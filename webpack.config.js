const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
entry: "./index.css",
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
      filename: "topography.js"
  }
};