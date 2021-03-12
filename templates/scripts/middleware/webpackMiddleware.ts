import { Compiler } from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import webpackConfig from "../webpack/webpack.common";

export default function webpackMiddleware(complier: Compiler) {
  const publicPath = webpackConfig.output!.publicPath as string;
  // 配置输出目录
  const devMiddlewareOptions: webpackDevMiddleware.Options = {
    publicPath,

    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  
  };
  // 配置热加载
  const hotMiddlewareOptions: webpackHotMiddleware.MiddlewareOptions = {
    path: "/__webpack_hmr",
    heartbeat: 2000,
  };

  return [
    webpackDevMiddleware(complier, devMiddlewareOptions),
    webpackHotMiddleware(complier, hotMiddlewareOptions),
  ];
}
