const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const outputDir = path.resolve(__dirname, "dist");
const srcDir = path.resolve(__dirname, "src");

module.exports = {
    mode: "development",
    entry:{
        index: path.resolve(__dirname, "src/js/index.js"),
        style: path.resolve(__dirname, "src/styles/style.scss")
    },
    output: {
        path: outputDir,
        filename: "[name].js"
    },
    devtool: "source-map",
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: srcDir,
                use: {
                    loader: "babel-loader",
                    options:{
                        plugins:["transform-class-properties"],
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
            }, 
        ]
    },
    plugins:[
        new CleanWebpackPlugin(["dist/*.*"]),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new OptimizeCSSAssetsPlugin(),
        new CopyWebpackPlugin([
            {from: `${srcDir}/index.html`, to: `${outputDir}/index.html`}
        ]),
    ]
}