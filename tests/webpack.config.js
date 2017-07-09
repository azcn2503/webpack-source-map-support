const path = require("path");
const webpack = require("webpack");

const WebpackSourceMapSupportPlugin = require("../index.js");

const config = {
  entry: {
    entry: path.resolve(__dirname, "src/entry.js")
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new WebpackSourceMapSupportPlugin()
  ]
};

module.exports  = config;
