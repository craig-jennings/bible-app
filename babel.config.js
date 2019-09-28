module.exports = (api) => {
  api.cache(true);

  const isRelease = process.env.RELEASE === 'true';
  console.log('isRelease: ', isRelease);

  const config = {
    plugins: [['babel-plugin-styled-components', { fileName: false }], 'react-hot-loader/babel'],
    presets: ['@babel/preset-react'],
  };

  if (isRelease) {
    config.plugins.push('transform-react-remove-prop-types');
    config.plugins.push(['react-remove-properties', { properties: ['data-testid'] }]);
  }

  return config;
};
