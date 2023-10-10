const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path')
module.exports = {
  mode:'development',
  entry:'./src/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean:true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./src/template.html',
      inject:false,
    })
  ],
  devServer: {
    static: './dist',
  },
}