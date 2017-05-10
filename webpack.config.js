module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'app.build.js',
        path: __dirname
    },
    module: {
        rules: [
            {
                test: /\.(txt|html)$/,
                use: 'raw-loader'
            },
            {
                test: /\.(pug|jade)$/,
                use: 'pug-loader'
            }
        ]
    },
    resolve: {
        modules: ['node_modules', __dirname]
    }
}
