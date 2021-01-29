const tsConfig = require('./tsconfig.json');

function generateAliases() {
  const { paths } = tsConfig.compilerOptions;
  const aliases = {};

  Object.entries(paths).forEach(([key, value]) => {
    const alias = key.replace('/*', '');
    const path = value[0].replace('/*', '');

    aliases[alias] = path;
  });

  return aliases;
}

module.exports = {
  alias: generateAliases(),
  exclude: ['**/.eslintrc', '**/serviceWorker.js', '**/test/*'],

  mount: {
    public: '/',
    src: '/dist',
  },

  optimize: {
    bundle: true,
    minify: true,
    // splitting: true,
    target: 'es2018',
  },

  packageOptions: {
    knownEntrypoints: ['react/jsx-runtime'],
  },

  plugins: ['@snowpack/plugin-babel', '@snowpack/plugin-react-refresh'],
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
};
