const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack'); 

module.exports = {
     entry: ['babel-polyfill', './src/js/index.js'],
  
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'order.html',
            template: './src/order.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'cart.html',
            template: './src/cart.html'
        }),
        new ExtractTextPlugin({
            filename: './css/style.css'
            
        }),
       
        new webpack.ProvidePlugin({
                    $: "jquery",
                    jQuery: "jquery"
                }) 
            ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        
        ]
    }
};
