"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("../config/path"));
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var webpack_1 = __importDefault(require("webpack"));
var webpackCommon = {
    entry: [path_1.default.entryPath, "webpack-hot-middleware/client"],
    output: {
        filename: "[name].[chunkhash:8].js",
        path: path_1.default.buildPath,
    },
    module: {
        rules: [
            {
                test: /\.(tsx?)/,
                use: "babel-loader",
            },
        ],
    },
    optimization: {
        moduleIds: "named",
    },
    resolve: {
        modules: ["node_modules"],
        extensions: [".js", ".tsx", ".ts", ".json"],
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
    plugins: [
        new html_webpack_plugin_1.default({
            template: path_1.default.htmlPath,
        }),
        new webpack_1.default.HotModuleReplacementPlugin(),
    ],
};
exports.default = webpackCommon;
