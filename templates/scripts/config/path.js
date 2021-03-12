"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var rootPath = path_1.default.resolve(__dirname, "../../");
var devProxy = [
    {
        path: "/api",
        target: "https://www.baidu.com",
        changeOrigin: true,
    },
];
exports.default = {
    appName: "typescript-react",
    host: "127.0.0.1",
    ports: [3001],
    rootPath: rootPath,
    devPath: path_1.default.resolve(rootPath, "src"),
    buildPath: path_1.default.resolve(rootPath, "build"),
    entryPath: path_1.default.resolve(rootPath, "src/index.tsx"),
    htmlPath: path_1.default.resolve(rootPath, "public/index.html"),
    devProxy: devProxy,
};
