module.exports = (api) => {
  // Cache the returned value forever and don't call this function again
  api.cache.forever();

  const isProd = process.env.NODE_ENV === 'production';

  const config = {
    plugins: [
      ['babel-plugin-styled-components', { fileName: false }],
      !isProd && 'react-refresh/babel',
    ].filter(Boolean),

    presets: [['@babel/preset-react', { runtime: 'automatic' }]],
  };

  if (isProd) {
    config.plugins.push('transform-react-remove-prop-types');
    config.plugins.push(['react-remove-properties', { properties: ['data-testid'] }]);
  }

  return config;
};
