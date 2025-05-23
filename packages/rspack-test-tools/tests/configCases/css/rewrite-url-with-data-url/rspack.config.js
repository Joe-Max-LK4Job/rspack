/** @type {import("@rspack/core").Configuration} */
module.exports = {
	target: "web",
	node: {
		__dirname: false,
		__filename: false
	},
	output: {
		cssFilename: "css/[name].css"
	},
	node: false,
	module: {
		generator: {
			"css/auto": {
				exportsOnly: false
			}
		},
		rules: [
			{
				test: /\.png$/i,
				type: "asset",
				parser: {
					dataUrlCondition: {
						maxSize: 30000
					}
				},
				generator: {
					filename: "image/[name].[contenthash:8][ext]"
				}
			}
		]
	},
	experiments: {
		css: true
	}
};
