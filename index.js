const webpack = require("webpack");

const plugin = function() {
  return new webpack.BannerPlugin({
    banner: 'require("source-map-support").install();',
    raw: true,
    entryOnly: false
  });
};

module.exports = plugin;
