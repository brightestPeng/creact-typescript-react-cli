"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var webpack_merge_1 = __importDefault(require("webpack-merge"));
var webpack_common_1 = __importDefault(require("./webpack.common"));
var devConfig = webpack_merge_1.default(webpack_common_1.default, {
    mode: "development",
});
exports.default = devConfig;
