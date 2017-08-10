var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  // Start building in src folder
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
    './src/index'
  ],
  module: {
   loaders: [
     {
       // Run js files through babel module
       test: /\.js?$/, loader: 'babel', exclude: /node_modules/,  query: {
        presets:[ 'es2015', 'react', 'stage-2' ]
      }
     },
     {
        // Enable less functionality
        test: /\.less$/,
        loaders: ["style", "css", "postcss-loader", "less"]
     },
     {
        // Enable CSS functionality
        test: /\.css$/,
        loaders: ["style", "css"]
     }
   ]
 },
 postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
 
  resolve: {
    extensions: ['', '.js']
  },
  // Output to dist folder as bundle.js
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  // Enable hot reload while webpack dev server is in use
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
