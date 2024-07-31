const { entry, module: configModule, resolve, plugins } = require('./webpack.config.js');

module.exports = {
  mode: 'development',
  entry,
  module: configModule,
  resolve,
  plugins,
  devServer: {
		open: true,
		hot: true,
	},
};
