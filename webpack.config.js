//webpack
const webpack = require("webpack");
//other
const path = require('path');
//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js'
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.css$/,
                loader: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Webpack Test",
        filename: "index.html",
        template: "./src/html/index.html"
    }), new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.$": "jquery"
    }), new MiniCssExtractPlugin()]
};