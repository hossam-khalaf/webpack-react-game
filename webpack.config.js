const path = require('path')

module.exports = {
	entry: './app/app.js',
	output: {
		filename: 'myBundle.js',
		path: path.resolve(__dirname, 'dist'),
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},

			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},

	devServer: {
		port: 8080,
		contentBase: path.resolve(__dirname, 'dist'),
		// make it super fast by injecting new code not reloading
		hot: true,
	},
	mode: 'development',
}
