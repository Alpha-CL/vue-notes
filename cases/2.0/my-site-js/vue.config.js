module.exports = {
	devServer: {
		proxy: {
			"/api": {
				target: "https://www.test.com",
			},

		},
	},
};
