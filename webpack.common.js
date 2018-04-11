const path = require('path');
//const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
 entry: {
   app: './src/index.js'
 },
 module : {
   rules: [
     {
       test: /\.js$/,
       use: 'babel-loader'
     },
     {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{loader: 'css-loader', options: { minimize: true }}, 'sass-loader']
        }))
      },
      {
       test: /\.(png|jpg|gif|svg)$/,
       use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: 'static/asstes/img',
              outputPath: 'static/asstes/img'
            }
          }
        ]
       }
   ]
 },
 plugins: [
   new webpack.NamedModulesPlugin(),
   new webpack.HotModuleReplacementPlugin(),
   new HtmlWebpackPlugin({
     template: './public/index.html'
   }),
   new ExtractTextPlugin({
       filename: `static/css/app.bundle.css`,
       disable: false,
       allChunks: true
   })
 ],
 output: {
   filename: 'static/js/[name].bundle.js',
   path: path.resolve(__dirname, 'public'),
   publicPath: '/'
 }
};
