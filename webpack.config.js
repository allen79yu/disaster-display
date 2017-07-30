const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const basePath = path.join(__dirname, "app");
const srcPath = path.join(basePath, "src");
const buildPath = path.join(basePath, "build");

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/app/index.html`,
    filename: "index.html",
    inject: "body"
});

module.exports = {
    entry: {
        app: [srcPath + "/app.js"],
        vendors: ["vue", "vue-router", "axios"]
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].[chunkhash].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ["babel"],
                include: srcPath
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css", { publicPath: "../build/" })
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!sass", { publicPath: "../build/" })
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract("style", "css!sass", { publicPath: "../build/" })
            },
            {
                test: /\.vue$/,
                loader: "vue"
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-otf"
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ["file?hash=sha512&digest=hex&name=[hash].[ext]", "image-webpack?bypassOnDebug"]
            }
        ]
    },
    plugins: [
        HTMLWebpackPluginConfig,
        //new webpack.DefinePlugin({ "process.env": { NODE_ENV: '"production"' } }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin("vendors", "vendors.js"),
        new ExtractTextPlugin("[name].[chunkhash].css"),
        //new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
        new webpack.ProvidePlugin({ axios: "axios" })
    ],
    devServer: {
        inline: true,
        port: 8028,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    devtool: "sourcemap"
};
