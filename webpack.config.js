const currentTask = process.env.npm_lifecycle_event

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

const config = {
	entry: './app/app.js',
	output: {
		filename: 'myBundle.[hash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [new HtmlWebpackPlugin({ template: './app/index.html' })],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/preset-env',
								{ useBuiltIns: 'usage', corejs: 3, targets: 'defaults' },
							],
							'@babel/preset-react',
						],
					},
				},
			},

			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},

	devServer: {
		port: 8080,
		contentBase: path.resolve(__dirname, 'dist'),
		// make it super fast by injecting new code not reloading
		hot: true,
	},
	devtool: 'eval-cheap-source-map',
	mode: 'development',
}

if (currentTask == 'build') {
	config.mode = 'production'
	config.module.rules[1].use[0] = MiniCssExtractPlugin.loader
	config.plugins.push(
		new MiniCssExtractPlugin({ filename: 'main.[hash].css' }),
		new CleanWebpackPlugin(),
		new WebpackManifestPlugin()
	)
}

module.exports = config
