module.exports = (api) => {
  api.cache(true);

  const isRelease = process.env.RELEASE === 'true';

  const config = {
    plugins: [['babel-plugin-styled-components', { fileName: false }]],
    presets: ['@babel/preset-typescript', ['@babel/preset-react', { runtime: 'automatic' }]],
  };

  if (isRelease) {
    config.plugins.push(['react-remove-properties', { properties: ['data-testid'] }]);
  }

  return config;
};
