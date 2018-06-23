const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    hot: true,
    proxy: {
          '/api/*': {
              target: 'https://api.behance.net/v2/projects?',
              secure: false,
              changeOrigin: true
          }
      },
    port: 3005
  }
});
