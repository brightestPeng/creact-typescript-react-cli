import { Configuration } from "webpack";
import appConfig from "../config/path";
import htmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const webpackCommon: Configuration = {
  entry: [appConfig.entryPath, "webpack-hot-middleware/client"],
  output: {
    filename: "[name].[chunkhash:8].js",
    path: appConfig.buildPath,
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
    new htmlWebpackPlugin({
      template: appConfig.htmlPath,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

export default webpackCommon;
