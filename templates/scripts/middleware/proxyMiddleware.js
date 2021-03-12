"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("../config/path"));
var http_proxy_middleware_1 = require("http-proxy-middleware");
var chalk_1 = __importDefault(require("chalk"));
/**
 * 加载中间件
 */
function proxyMiddleware(server, complier) {
    // 加载反向代理
    path_1.default.devProxy.forEach(function (_a) {
        var path = _a.path, options = __rest(_a, ["path"]);
        var target = options.target;
        console.log("Proxy " + chalk_1.default.green.underline(path) + " " + chalk_1.default.yellow("-->") + " " + chalk_1.default.green.underline(target));
        server.use(path, http_proxy_middleware_1.createProxyMiddleware(options));
    });
}
exports.default = proxyMiddleware;
