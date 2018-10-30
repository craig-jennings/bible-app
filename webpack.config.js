const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },

  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      minify: true,
      template: './src/index.html',
    }),

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
    ]),

    new InjectManifest({
      swSrc: './src/service-worker.js',
    }),
  ],
};
