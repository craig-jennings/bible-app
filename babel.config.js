module.exports = (api) => {
  // Cache the returned value forever and don't call this function again
  api.cache.forever();

  const isRelease = process.env.RELEASE === 'true';

  const config = {
    plugins: [['babel-plugin-styled-components', { fileName: false }]].filter(Boolean),
    presets: ['@babel/preset-typescript', ['@babel/preset-react', { runtime: 'automatic' }]],
  };

  if (isRelease) {
    config.plugins.push(['react-remove-properties', { properties: ['data-testid'] }]);
  }

  return config;
};
