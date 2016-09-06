var webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    entry: [
        './index.jsx'
    ],
    output: {
        path: './build',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass'],
            exclude: /node_modules/
        }
    ]
    }
}
