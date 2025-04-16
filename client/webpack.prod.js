const common = require('./webpack.common');

module.exports = {
  ...common,
  devtool: 'eval-source-map',
  mode: 'production'
};

