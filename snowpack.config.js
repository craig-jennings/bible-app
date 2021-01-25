module.exports = {
  exclude: ['**/.eslintrc', '**/serviceWorker.js'],

  mount: {
    public: '/',
    src: '/dist',
  },

  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },

  plugins: [
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-babel',
    '@snowpack/plugin-react-refresh',
  ],

  packageOptions: {
    knownEntrypoints: ['react/jsx-runtime'],
  },

  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
};
