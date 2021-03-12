import { Options } from "http-proxy-middleware/dist/types";

export interface IDevProxyItem extends Options {
  path: string;
}
