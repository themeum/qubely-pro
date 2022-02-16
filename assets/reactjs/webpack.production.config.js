'use strict';

var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    mode: 'production',
    entry: {
        'qubely': path.join( __dirname, 'src/index.js')
    },
    output: {
        path: path.join( __dirname, '../js'),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.module\.s(a|c)ss$/,
                loader: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: isDevelopment
                    }
                    },
                    {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: isDevelopment
                    }
                    }
                ]
                },
                {
                test: /\.s(a|c)ss$/,
                exclude: /\.module.(s(a|c)ss)$/,
                loader: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: isDevelopment
                    }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../css/style.min.css", // relative to output.path
        }),
    ],
};