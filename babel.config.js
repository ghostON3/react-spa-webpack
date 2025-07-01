module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					browsers: ["> 1%", "last 2 versions", "not ie <= 8"],
				},
				useBuiltIns: "usage",
				corejs: 3,
			},
		],
		[
			"@babel/preset-react",
			{
				runtime: "automatic",
			},
		],
		"@babel/preset-typescript",
	],
	plugins: [
		"@babel/plugin-transform-class-properties",
		"@babel/plugin-transform-runtime",
	],
};
