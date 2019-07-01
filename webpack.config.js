const { InjectManifest } = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    'sw-installer': './src/service-worker/sw-installer.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },

  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        flatten: true,
        from: './src/images/*',
        to: 'images/',
      },
      {
        flatten: true,
        from: './src/manifest.json',
        to: './',
      },
      {
        flatten: true,
        from: './src/robots.txt',
        to: './',
      },
    ]),

    new HtmlWebpackPlugin({
      inlineSource: '.css$',
      minify: true,
      template: './src/index.html',
    }),

    new HtmlWebpackInlineSourcePlugin(),

    new InjectManifest({
      swSrc: './src/service-worker/service-worker.js',
    }),

    new MiniCssExtractPlugin({
      chunkFilename: '[id].css',
      filename: '[name].css',
    }),
  ],
};
