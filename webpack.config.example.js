'use strict';
var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, './node_modules');
var development = process.env.NODE_ENV == 'development';

module.exports = {
    entry: path.resolve(__dirname, './example/Example.jsx'),
    output: {
        publicPath: development ? "http://localhost:8008/example/dist" : ".example/dist/",
        path: path.resolve(__dirname, './example/dist'),
        filename: 'react-components-example.min.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
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
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias:{
            "react-components":development ? path.resolve(__dirname, './components/index.js') : path.resolve(__dirname, './index.js')
        }
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin()
    ],
    stats: {
        colors: true
    }
};