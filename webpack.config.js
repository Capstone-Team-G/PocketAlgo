const path = require('path');

module.exports = {
  watch: false, 
  mode: 'development', 
  entry: './components/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname+ 'public'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
};