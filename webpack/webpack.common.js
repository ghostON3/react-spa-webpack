const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
	require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const isProduction = process.env.NODE_ENV === "prod";

module.exports = {
	name: "client",
	entry: {
		"react-app-setup": path.resolve(__dirname, "..", "./src/index.tsx"),
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js"],
		mainFields: ["source", "module", "main"],
		modules: [path.resolve("node_modules")],
		alias: {
			"@": path.resolve(__dirname, "..", "src"),
		},
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
					},
				],
			},
			{
				test: /\.(scss|sass|css)$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: "asset/inline",
			},
		],
	},
	output: {
		path: path.resolve(__dirname, "..", "./dist"),
		filename: isProduction ? "[name].[contenthash].js" : "[name].js",
		clean: true,
		publicPath: "/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve(__dirname, "..", "./public/index.html"),
			favicon: path.resolve(__dirname, "..", "./public/images/favicon.png"),
			showErrors: true,
		}),
		new WebpackManifestPlugin({
			writeToFileEmit: true,
		}),
		new ForkTsCheckerWebpackPlugin(),
		new Dotenv({
			path: ".env",
		}),
		...(isProduction ? [new BundleAnalyzerPlugin()] : []),
	],
	stats: "errors-only",
};
