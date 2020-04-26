const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: {
    vendor: ['react', 'react-dom'],
    comment: ['antd']
  },
  output: {
    filename: '[name].dll.[hash:8].js',
    path: path.join(__dirname, './../', 'dll'),
    library: 'dll_[name]_[hash:8]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, './../', 'dll/[name].manifest.json'),
      name: 'dll_[name]_[hash:8]'
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  }
}