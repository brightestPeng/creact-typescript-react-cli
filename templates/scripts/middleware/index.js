"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var proxyMiddleware_1 = __importDefault(require("./proxyMiddleware"));
var webpackMiddleware_1 = __importDefault(require("./webpackMiddleware"));
function setupMiddleware(server, compiler) {
    // 反向代理
    proxyMiddleware_1.default(server, compiler);
    // 热加载
    var middlewares = webpackMiddleware_1.default(compiler);
    server.use(middlewares);
}
exports.default = setupMiddleware;
