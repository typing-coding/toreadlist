const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            include: [
                path.resolve(__dirname,'src')
            ],
            use: {
                loader: 'babel-loader'
            }
        }]
    },
    devServer: {
        open: true,
        port: 9000
    }
}