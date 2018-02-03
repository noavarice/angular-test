const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    vendor: './vendor.js',
    app: './app.js',
  },
  output: {
    filename: '[name].[chunkhash].js',
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
      title: 'Output Management',
      template: 'my-index.html',
      inject: 'head'
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
