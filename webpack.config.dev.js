var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: "bundle.js",
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(scss|css)$/,
        loader: 'style-loader!css-loader!sass-loader?sourceMap'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};