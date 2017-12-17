const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: "./build"
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
