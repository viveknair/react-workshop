var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: "./js",
  },
  output: {
      path: __dirname,
      filename: "js/bundle.js"
  },
  module: {
    loaders: [
      {
        test: require.resolve("react"),
        loader: "expose?React"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel?stage=1&optional=runtime'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
