// noinspection JSUnusedGlobalSymbols
module.exports = {
	chainWebpack: config => {
		config.resolve.alias.set('vue', '@vue/compat')
		config.module
			.rule('vue')
			.use('vue-loader')
			.loader('vue-loader')
			.tap(options => {
				options.transformAssetUrls = {
					img: 'src',
					image: 'xlink:href',
					'b-avatar': 'src',
					'b-img': 'src',
					'b-img-lazy': ['src', 'blank-src'],
					'b-card': 'img-src',
					'b-card-img': 'src',
					'b-card-img-lazy': ['src', 'blank-src'],
					'b-carousel-slide': 'img-src',
					'b-embed': 'src'
				},

				options.compilerOptions= {
					compatConfig: {
						MODE: 2
					}
				}

				return options
			}),
			config.plugin('define').tap((definitions) => {
				Object.assign(definitions[0], {
					__VUE_OPTIONS_API__: 'true',
					__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
				})
				return definitions
			})
	},
		publicPath: "/",

	assetsDir: 'src/assets'
}