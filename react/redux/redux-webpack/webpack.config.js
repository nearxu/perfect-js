const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
let htmlWebpackPlugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, './src/index.html')
})

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: { loader: 'babel-loader' },
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 1234,
        open: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true
    },
    plugins: [htmlWebpackPlugin]
}