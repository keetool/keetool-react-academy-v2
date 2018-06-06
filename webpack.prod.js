const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  output: {
    publicPath: "https://d255zuevr6tr8p.cloudfront.net/build-manage/"
  }
});
