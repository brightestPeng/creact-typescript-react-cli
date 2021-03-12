import { Compiler } from "webpack";
import { Express } from "express";
import appConfig from "../config/path";
import { createProxyMiddleware } from "http-proxy-middleware";
import chalk from "chalk";

/**
 * 加载中间件
 */
export default function proxyMiddleware(server: Express, complier: Compiler) {
  // 加载反向代理
  appConfig.devProxy.forEach(({ path, ...options }) => {
    const target = options.target as string;
    console.log(
      `Proxy ${chalk.green.underline(path)} ${chalk.yellow(
        "-->"
      )} ${chalk.green.underline(target)}`
    );
    server.use(path, createProxyMiddleware(options));
  });
}
