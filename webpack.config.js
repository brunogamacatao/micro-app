const webpack = require('webpack'); //to access built-in plugins
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './client/src/js/app.js',
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('style.css'),
    new HtmlPlugin({
      template: 'client/src/index.html'
    })    
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: /src/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      }      
    ]
  }
};
