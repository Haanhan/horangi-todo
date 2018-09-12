const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const outputDir = path.resolve(__dirname, "dist");
const srcDir = path.resolve(__dirname, "src");

module.exports = {
    mode: "development",
    entry:{
        index: path.resolve(__dirname, "src/js/index.js")
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
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(["dist/*.*"]),
        new CopyWebpackPlugin([
            {from: `${srcDir}/index.html`, to: `${outputDir}/index.html`}
        ]),
        new CopyWebpackPlugin([
            {from: "./node_modules/bulma/css/bulma.min.css", to: `${outputDir}`}
        ])
    ]
}