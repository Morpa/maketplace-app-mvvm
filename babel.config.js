module.exports = (api) => {
	api.cache(true);
	return {
		presets: [
			["babel-preset-expo", { jsxImportSource: "nativewind" }],
			"nativewind/babel",
		],
		plugins: [
			[
				"module-resolver",
				{
					root: ["./"],
					alias: {
						"@": "./src",
						"@shared": "./src/shared",
						"@viewModels": "./src/viewModels",
						"@app": "./src/app",
						"@assets": "./src/assets",
						"@styles": "./src/styles",
					},
				},
			],
		],
	};
};
