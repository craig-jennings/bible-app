const { InjectManifest } = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    open: true,
  },

  devtool: 'source-map',
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
        },

        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },

  output: {
    path: `${__dirname}/dist`,
    filename: '[name].js',
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
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
      ],
    }),

    new HtmlWebpackPlugin({
      minify: true,
      template: './src/index.html',
    }),

    new InjectManifest({
      swSrc: './src/service-worker.js',
    }),

    new webpack.ProvidePlugin({
      PropTypes: 'prop-types',
    }),

    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ],

  stats: {
    builtAt: false,
    entrypoints: false,
    excludeAssets: [/images[/\\]/, /precache-manifest\./, /robots\.txt/],
    hash: false,
    modules: false,
  },
};
