const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'inline-source-map',
  output: {
        path: path.join(process.cwd(), '/dist'),
        filename: 'static/js/[name].[hash].js'
    },
  plugins: [
   new UglifyJSPlugin({
     sourceMap: true
   }),
   new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
     })
  ]
});
