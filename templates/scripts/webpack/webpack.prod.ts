import { Configuration } from "webpack";
import merge from "webpack-merge";
import common from "./webpack.common";

const prodConfig: Configuration = merge(common, {
  mode: "production",
});

export default prodConfig;
