const path = require('path');

module.exports = {
    mode: 'development',
    // entry: ['babel-polyfill', './components/index.js'],
    entry: './components/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    resolve: {
        mainFields: ['browser', 'main', 'module'],
        extensions: ['.js', '.jsx']
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
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: "file-loader",
              }
        ]
    },
};
