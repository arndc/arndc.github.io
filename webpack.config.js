const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, 'assets'),
        },
        modules: ['node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            favicon: './favicon.ico',
        }),
        new CopyPlugin([
            { from: './assets/particles.json', to: './particles.json' },
        ]),
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist/'),
        port: 9000,
    },
};
