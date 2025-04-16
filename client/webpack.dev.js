const path = require('path');
const common = require('./webpack.common');

module.exports = {
  ...common,
  mode: 'development',
  devtool: 'eval-source-map',
  resolve: {
    ...common.resolve,
  },
  devServer: {
    port: process.env.DOCKER_CLIENT_PORT,
    hot: true,
    open: false,
    historyApiFallback: true
  }
};

