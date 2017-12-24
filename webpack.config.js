const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    vendor: './vendor.js',
    app: './index.js',
  },
  output: {
    filename: '[hash].[name].js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./build"
  },
  plugins: [
    new UglifyJsPlugin(),
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
