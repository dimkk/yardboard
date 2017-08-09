var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '../client/public');
var APP_DIR = path.resolve(__dirname, '../client/app');

var config = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,

    host: 'localhost', // Defaults to `localhost`
    port: 3000, // Defaults to 8080
    proxy: {
      '*': {
                target: 'ws://localhost:8000',
                ws: true,
            },
    }
  },
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      APP_DIR + '/index.jsx'
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?/,
        include: APP_DIR,
        loader: ['react-hot-loader/webpack', 'babel-loader']
      }
    ]
  }
};

module.exports = config;