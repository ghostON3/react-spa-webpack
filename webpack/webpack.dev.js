const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
require("dotenv").config();

const port = process.env.PORT || 3000;

module.exports = {
	mode: "development",
	devtool: "cheap-module-source-map",
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		open: true,
		hot: true,
		historyApiFallback: true,
		client: {
			logging: "info",
			overlay: {
				warnings: false,
				errors: true,
			},
		},
		port,
	},
	plugins: [new ReactRefreshWebpackPlugin()],
};
