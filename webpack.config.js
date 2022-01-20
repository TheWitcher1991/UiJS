'use strict'

const path              = require('path'),
	  webpack           = require('webpack'),
	  MiniCssExtractPlugin = require('mini-css-extract-plugin')

const PATHS = {
	src: path.join(__dirname, './app/static/'),
	build: path.join(__dirname, './build/')
};

let mode   = 'development',
	target = 'web'

if (process.env.NODE_ENV === 'production') {
	mode = 'production'
	target = 'browserslist'
}

module.exports = {
	target,
	devtool: 'source-map',
	entry: [
		`${PATHS.src}scripts/app.js`,
		`${PATHS.src}styles/index.sass`,
	],
	output: {
		path: path.resolve(__dirname, PATHS.build),
		filename: 'scripts.bundle.js',
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true
					}
				}
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				include: path.resolve(__dirname, PATHS.src),
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
            	test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: mode === 'production' ? 'asset' : 'asset/resource'
            },
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline'
			}
		]
	},
	resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.sass', '.scss', '.css'],
    },
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles.bundle.css'
		})
	]
}
