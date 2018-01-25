const webpack = require('webpack');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'whatwg-fetch',
        './src/index.js'
    ],

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        inline: true,
        port: 7777,
        contentBase: __dirname + '/public/',
        hot: true,
        historyApiFallback: true,
    },

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|css|font|img)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};