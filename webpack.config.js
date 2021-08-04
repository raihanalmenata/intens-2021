const path = require('path');

module.exports = {
    mode: 'development',
    entry:'./src/index.js',
    devtool: 'inline-source-map',
    stats: {
        children: true,
      },
    devServer: {
        // contentBase: '/public',
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        // historyApiFallback: true,
    },
    output: {
        // filename: "bundle.js",
        // path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
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