var webpack = require('webpack'); //to access built-in plugins
var path = require('path');

module.exports = {
  entry: './client/src/js/app.js',
  output: {
    path: path.join(__dirname, 'client/dist/js'),
    filename: 'app.bundle.js',
    publicPath: '/js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader']
    }]
  }
};
