const path = require('path')
const webpack = require('webpack')
const dist = path.resolve(__dirname, 'www')

module.exports = {
  entry: [
    './client/index.js',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
  ],
  devtool: 'inline-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  //   target: "web",
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, dist),
  },
}
