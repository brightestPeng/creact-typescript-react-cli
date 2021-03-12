"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var webpack_dev_middleware_1 = __importDefault(require("webpack-dev-middleware"));
var webpack_hot_middleware_1 = __importDefault(require("webpack-hot-middleware"));
var webpack_common_1 = __importDefault(require("../webpack/webpack.common"));
function webpackMiddleware(complier) {
    var publicPath = webpack_common_1.default.output.publicPath;
    // 配置输出目录
    var devMiddlewareOptions = {
        publicPath: publicPath,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    };
    // 配置热加载
    var hotMiddlewareOptions = {
        path: "/__webpack_hmr",
        heartbeat: 2000,
    };
    return [
        webpack_dev_middleware_1.default(complier, devMiddlewareOptions),
        webpack_hot_middleware_1.default(complier, hotMiddlewareOptions),
    ];
}
exports.default = webpackMiddleware;
