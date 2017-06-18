import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const webpackConfig = {
    entry: [
        'react-hot-loader/patch', path.join(__dirname, 'src/index'),
        'webpack-dev-server/client?http://localhost:8888',
        'webpack/hot/only-dev-server'
    ],
    output: {
        path: path.join(__dirname, 'output/assets'),
        filename: 'app.js',
        publicPath: '/assets'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
        //new ExtractTextPlugin('styles.css')
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: [/node_modules/]
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                // use: ExtractTextPlugin.extract(     {         fallback: 'style-loader',
                // use: 'css-loader',         publicPath: 'output/assets'     } )
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
}

module.exports = webpackConfig;