var path = require("path");
var webpack = require("webpack");

var src_path = path.resolve(__dirname,"src");
var build_path = path.resolve(__dirname,"dist");

var appMain = path.resolve(src_path,"app.js");

var vendorLibraries = [
    "angular"
];

var UglifyJSWebpackPlugin = require("uglifyjs-webpack-plugin");
var HTMLWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");

var htmlPlugin = new HTMLWebpackPlugin({
    "title" : "Angular Webpack Boilerplate",
    "inject" : "body"
});

var vendorCommonChunk = new webpack.optimize.CommonsChunkPlugin("vendor");

var config = {
    entry : {
        app : [appMain],
        vendor : vendorLibraries
    },
    output : {
        filename : "[name].bundle.js",
        path : build_path
    },
    resolve : {
    },
    module : {
    },
    plugins : [
        htmlPlugin,
        new CleanWebpackPlugin([build_path]),
        new UglifyJSWebpackPlugin(),
        vendorCommonChunk
   ]
};

module.exports = config;
