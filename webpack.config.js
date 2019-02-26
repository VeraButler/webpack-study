module.exports = {
    // where do we want the file to start looking
    entry: [
        './src/index.js'
    ],
    // put all output in this location
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        // compile entry file to this file
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['eslint-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}