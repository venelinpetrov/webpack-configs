const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const commonConfig = {
    entry: {
        main: path.resolve(__dirname, 'src', 'main.js'),
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            // this implies that you refer images with `~images/path/to/image/[image_name].[ext]
            images: path.resolve('./src/images')
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'React with SASS',
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)$/,
                use: 'file-loader'
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 50000
                    }
                }
            }
        ]
    },
};

module.exports = (env = {}) => {
    if (env.production) {
        return merge(commonConfig, prodConfig);
    }

    return merge(commonConfig, devConfig);
};