import { Compiler } from "webpack";
import { Express } from "express";
import proxy from "./proxyMiddleware";
import webpackMiddleware from "./webpackMiddleware";

export default function setupMiddleware(server: Express, compiler: Compiler) {
  // 反向代理
  proxy(server, compiler);

  // 热加载
  const middlewares = webpackMiddleware(compiler);
  server.use(middlewares);
}
