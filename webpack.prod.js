const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require("webpack")
const common = require('./webpack.config.js');
module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
      "HOST": JSON.stringify(process.env.HOST)
    }),
  ]
});