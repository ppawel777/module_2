const { merge } = require('webpack-merge');
const CommonConfig = require('./webpack.config.common')

module.exports = merge(CommonConfig, {
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    port: 3010,
    hot: true,
    open: true
  }
})