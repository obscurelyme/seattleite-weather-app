const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => ({
  mode: env.production ? 'production' : 'development',
  context: resolve(__dirname),
  entry: './src/index.tsx',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: env.production ? 'app-[contenthash].js' : 'app.js',
  },
  devServer: {
    contentBase: 'dist',
    open: true,
    port: 8080,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: './manifest.json',
          to: './manifest.json',
        },
        {
          from: './icons',
          to: './icons',
        },
        {
          from: './images',
          to: './images',
        },
      ],
    }),
  ],
});
