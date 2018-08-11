const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                exclude: [
                    /node_modules/,
                    /\.prod\.tsx?$/
                ],
                options: {
                    emitErrors: true,
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: [
                    /node_modules/,
                    /\.prod\.tsx?$/
                ],
                options: {
                    configFile: 'tsconfig.json',
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'static/js/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    serve: {
        content: path.resolve(__dirname, 'dist'),
        port: 3000,
        add: (app, middleware, options) => {
            app.use(convert(history({ index: '/' })));
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ]
};