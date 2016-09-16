const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const inlineStyleSheets = "style-loader!css-loader!postcss-loader";

const babelrc = JSON.parse(fs.readFileSync('./.babelrc').toString());

console.log(`__dirname '${__dirname}'`);

const config = {
    debug: true,

    devtool: 'source-map',

    entry: {
        main: ['./src/Root.js', 'webpack-hot-middleware/client'],
        vendor: ['react']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: inlineStyleSheets
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules|lib/,
                query: babelrc
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                loaders: [
                    'url-loader?limit=8192',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].[chunkhash].css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            favicon: 'src/favicon.png',
            inject: 'body',
        }),
        new CleanWebpackPlugin(['dist'], {
            root: __dirname
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].js'),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(require("./package.json").version)
        })
    ],
    postcss: function () {
        return [
            require('precss'),
            require('autoprefixer')
        ];
    }
};


module.exports = config;


