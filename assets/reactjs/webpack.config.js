'use strict';
var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevelopment = process.env.NODE_ENV === 'development';


module.exports = {
    mode: 'development',
    entry: [
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, '../js/'),
        filename: 'qubely.pro.dev.js'
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /(node_modules|bower_components)/,
                use: { loader: 'babel-loader' }
            },
            // {
            //     test: /\.scss$/,
            //     use: [ 'style-loader', 'css-loader', 'sass-loader' ],
            // },
            // {
            //     test:  /\.scss$/,
            //     include: path.resolve(__dirname, 'src/blocks/**/style.scss'),
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         'style-loader',
            //         'css-loader',
            //         // 'postcss-loader',
            //         'sass-loader',
            //     ]
            // },
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
    devtool: "source-map"
};