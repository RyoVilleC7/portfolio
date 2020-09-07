const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const SRC = path.resolve(__dirname, 'node_modules');
var StatsPlugin = require('stats-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
    minify: false
  });
　
module.exports = {

    mode: 'production',

    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    
    devServer: {
        historyApiFallback: true,
        port: 8000,
        open: true
    },

    module: {
        rules: [
            {
                test: /\.(mp3)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },

            {
              test: /\.(glsl|vs|fs|vert|frag)$/,
              exclude: /node_modules/,
              use: [
                'raw-loader',
              ]
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query:{
                  presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },

            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },

            {
              test:/\.(jpe?g|png|gif|svg|ico|jpeg)$/i,
              loader: 'url-loader',
              options:{
                limit: 2048,
                name: './image/[name].[ext]'
              }
            }
            
        ]
    },

    plugins: [
        htmlWebpackPlugin,
        new StatsPlugin('stats.json', {
          chunkModules: true,
          exclude: [/node_modules[\\\/]react/]
        }),
    ]
};