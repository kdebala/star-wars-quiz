//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    port: 8080,
    host: 'localhost',
    //host: '192.168.1.128',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
