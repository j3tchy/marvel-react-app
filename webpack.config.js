var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpack = require('webpack');

var config = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader'
          },{
            loader: 'sass-loader'
          }],
          fallback: 'style-loader'
        })

      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'My App',
      template: 'app/index.html'
    }),
    new ExtractTextPlugin('index.css')
  ]
};

if(process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = config;
