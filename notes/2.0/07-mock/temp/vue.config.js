module.exports = {
	devServer: {
		proxy: {
			"api": {
				target: 'https://test.com'
			},
		},
	},
};
