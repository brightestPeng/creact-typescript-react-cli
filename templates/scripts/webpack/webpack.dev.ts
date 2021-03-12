import { Configuration } from "webpack";
import merge from "webpack-merge";
import common from "./webpack.common";

const devConfig: Configuration = merge(common, {
  mode: "development",
});

export default devConfig;
