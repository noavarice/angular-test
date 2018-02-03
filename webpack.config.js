const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    _vendor: './vendor.js',
    app: './index.js',
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./build"
  },
  plugins: [
    new UglifyJsPlugin(),
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
  ],
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src"),
    ]
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  }
};
