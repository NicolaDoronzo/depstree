const { merge } = require("webpack-merge");
const path = require('path');
const commonConfiguration = require("./webpack.common.js");
const portFinderSync = require("portfinder-sync");

module.exports = merge(commonConfiguration, {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    host: "0.0.0.0",
    port: portFinderSync.getPort(8080),
    open: true,
    https: false,
  },
});
