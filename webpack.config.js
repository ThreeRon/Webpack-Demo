const  path = require('path');
const  webpack = require('webpack');
const  htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/app.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'js/[name].bundle.js'
    },
    module : {
        loaders : [
            {
                test:/\.js$/,
                loader:'babel-loader',
                include:path.resolve(__dirname, 'src'),
                exclude:path.resolve(__dirname, 'node_modules'),
                query:{presets:['latest']}
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader?importLoaders=1!postcss-loader'
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                test:/\.tpl$/,
                loader:'ejs-loader'
            },
            {
                test:/\.(jpg|png|gif|svg)$/,
                loader:'file-loader',
                query:{name:'assets/[name]-[hash:5].[ext]'}
            }
        ]
    },
    plugins : [
        new htmlWebpackPlugin({
            filename : 'index.html',
            template : 'index.html',
            inject : 'body'
        }),
        new webpack.ProvidePlugin({
            $:'jquery',
            jQuery:'jquery',
            'window.jQuery':'jquery'
        })
    ]
}