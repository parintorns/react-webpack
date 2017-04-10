var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
  entry: [
    path.join(__dirname, 'src/index.js'),
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    }),
    new HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            ['es2015', { modules: false }],
            'react',
          ],
          plugins: ['react-hot-loader/babel'],
        }
      }]
    }, {
      test: /\.(css|scss|sass)$/,
      loader: 'style-loader!css-loader!sass-loader',
    }]
  },
  devServer: {
    hot: true,
  },
};
