import webpack from "webpack";
import express from "express";
import getPort from "get-port";
import chalk from "chalk";
import openBrowser from "webpack-open-browser";

import webpackDevConfig from "./webpack/webpack.dev";
import setupMiddlewares from "./middleware";
import pathConfig from "./config/path";

async function start() {
  const PORT = await getPort({
    host: pathConfig.host,
    port: pathConfig.ports,
  });
  const address = `http://${pathConfig.host}:${PORT}`;

  // 自动打开浏览器
  webpackDevConfig.plugins!.push(new openBrowser({ url: address }));

  const app = express();

  const complier = webpack(webpackDevConfig);

  // 加载中间件
  setupMiddlewares(app, complier);

  app.listen(PORT, () => {
    console.log(`Server is running at ${chalk.green(address)}`);
  });
}

start();
