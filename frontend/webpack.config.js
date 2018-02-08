import webpack from 'webpack'
import path from 'path'

export default {
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, './src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,  
  target: 'web',
  devServer: {
    contentBase: path.resolve(__dirname, 'src')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    rules: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), use: [{loader:'babel'}]},
      {test: /(\.css)$/, use: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: {loader: 'file'}},
      {test: /\.(woff|woff2)$/, use: {loader: 'url?prefix=font/&limit=5000'}},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: {loader: 'url?limit=10000&mimetype=application/octet-stream'}},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: {loader: 'url?limit=10000&mimetype=image/svg+xml'}}
    ]
  }
}