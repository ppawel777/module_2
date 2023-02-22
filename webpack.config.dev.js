const { merge } = require('webpack-merge');
const CommonConfig = require('./webpack.config.common')
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = merge(CommonConfig, {
  mode: 'development',
  plugins: [new ESLintPlugin()],
  devtool: "inline-source-map",
  devServer: {
    port: 3010,
    hot: true,
    open: true
  }
})