const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const RobotstxtPlugin = require("robotstxt-webpack-plugin")

module.exports = {
  entry: './src/main/index.jsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main-bundle-[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', 'scss'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new RobotstxtPlugin({
      filePath: './public/robots.txt'
    })
  ]
}
