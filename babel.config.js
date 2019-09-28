module.exports = (api) => {
  const isProd = api.env('production');

  const config = {
    plugins: [['babel-plugin-styled-components', { fileName: false }], 'react-hot-loader/babel'],
    presets: ['@babel/preset-react'],
  };

  if (isProd) {
    config.plugins.push('transform-react-remove-prop-types');

    // config.plugins.push(['react-remove-properties', { properties: ['data-testid'] }]);
  }

  return config;
};
