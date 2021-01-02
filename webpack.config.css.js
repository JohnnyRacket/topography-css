const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
// module.exports = {
//     entry: './index.js',
    
//     module: {
//         rules: [
//         {
//             test: /\.css$/i,
//             use: [MiniCssExtractPlugin.loader, 'css-loader'],
//         },
//         ],
//     },
// };


module.exports = {
    entry: './index.css',
    plugins: [new MiniCssExtractPlugin({
        filename: "topography.css"}), new FixStyleOnlyEntriesPlugin()],
    module: {
      rules: [
        {
          test: /.s?css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
  };