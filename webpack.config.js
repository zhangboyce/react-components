'use strict';

// config/webpack.config.js
var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, './node_modules');

module.exports = {
    entry: path.resolve(path.resolve(__dirname), 'index.js'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
                {
                    test: /components(\\|\/).+\.jsx?$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true,
                                plugins: ['transform-decorators-legacy' ],
                                presets: ['es2015', 'stage-0', 'react']
                            }
                        }
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' }
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                        { loader: 'style-loader' },
                        { loader: 'css-loader' },
                        { loader: 'less-loader' }
                    ]
                },
                {
                    test:/\.(jpg|png|gif|jpeg)?$/,
                    use: [ { loader: 'url-loader' } ]
                }
            ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ],
    stats: {
        colors: true
    }
};