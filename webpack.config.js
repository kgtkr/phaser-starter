const webpack = require('webpack');

module.exports = {
    entry: './src/main.ts',
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist",
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: [/\.vert$/, /\.frag$/],
                use: 'raw-loader'
            }
        ]

    },
    plugins: [
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        })
    ],
    devServer: {
        contentBase: 'public',
        port: 3000
    }
};