module.exports = (api) => {
  const config = {
    plugins: [
      ['babel-plugin-styled-components', { fileName: false }],
      !api.env('production') && 'react-refresh/babel',
    ],

    presets: [['@babel/preset-react', { runtime: 'automatic' }]],
  };

  if (process.env.RELEASE === 'true') {
    config.plugins.push('transform-react-remove-prop-types');
    config.plugins.push(['react-remove-properties', { properties: ['data-testid'] }]);
  }

  return config;
};
