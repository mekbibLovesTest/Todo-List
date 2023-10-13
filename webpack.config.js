const HtmlWebpackPlugin = require('html-webpack-plugin');
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
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: './dist',
  },
}