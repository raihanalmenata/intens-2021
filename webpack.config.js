const path = require('path');

module.exports = {
    mode: 'development',
    entry:'./src/index.js',
    // devtool: 'inline-source-map',
    devtool: false,
    devServer: {
        // contentBase: './build',
        // contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true,
        // historyApiFallback: true,
    },
    performance: {
        hints: false,
        // maxEntrypointSize: 512000,
        // maxAssetSize: 512000
    },
    output: {
        // filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        // path: path.join(__dirname, 'dist'),
        // publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                loader: 'babel-loader',
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.(less|css)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                    }
                ]
            }
        ]
    },
}