const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackMd5Hash = require("webpack-md5-hash");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        './src/index.js',
    ],
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].chunk.js',
    },
    stats: {
        children: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.css$/,
                oneOf: [
                    {
                        exclude: /node_modules/,
                        use: [MiniCssExtractPlugin.loader, {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                modules: true,
                                localIdentName: '[local]__[hash:base64:5]',
                            },

                        }]
                    },
                    {
                        include: /node_modules/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                        ]
                    },
                ],
            },
            {
                test: /\.less$/,
                oneOf: [
                    {
                        exclude: /node_modules/,
                        use: [MiniCssExtractPlugin.loader, {
                            loader: "css-loader",
                            options: {
                                sourceMap: true,
                                modules: true,
                                localIdentName: '[local]__[hash:base64:5]',
                            },

                        }, {
                            loader: "less-loader", options: {
                                javascriptEnabled: true,
                            }
                        }]
                    },
                    {
                        include: /node_modules/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            'css-loader',
                            {
                                loader: "less-loader", options: {
                                    javascriptEnabled: true,
                                }
                            }
                        ]
                    },
                ],
            },



        ],

    },
    plugins: [
        new WebpackMd5Hash(),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[name].[contenthash].chunk.css",
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ],
        splitChunks: {
            chunks: 'all'
        }
    }
};
