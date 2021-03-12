import path from "path";
import { IDevProxyItem } from "../typings/server";

const rootPath = path.resolve(__dirname, "../../");

const devProxy: Array<IDevProxyItem> = [
  {
    path: "/api",
    target: "https://www.baidu.com",
    changeOrigin: true,
  },
];

export default {
  appName: "typescript-react",
  host: "127.0.0.1",
  ports: [3001],
  rootPath,
  devPath: path.resolve(rootPath, "src"),
  buildPath: path.resolve(rootPath, "build"),
  entryPath: path.resolve(rootPath, "src/index.tsx"),
  htmlPath: path.resolve(rootPath, "public/index.html"),
  devProxy,
};
