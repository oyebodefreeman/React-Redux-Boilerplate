const path = require("path");
// Plugins
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(css|scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },

    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js",
        filename: "[name].[hash].js",
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "public/index.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "style.[hash].css",
            chunkFileName: "[id].css"
        }),
    ],

    devServer: {
        host: "0.0.0.0",
        port: "3000"
    },

    resolve: {
        modules: [path.resolve(__dirname, "./src"), "node_modules"],
        extensions: [".js", ".jsx", ".json"],

        alias: {
            "@redux": path.resolve(__dirname, "./src/redux"),
        },
    },
};
