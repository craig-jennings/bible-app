module.exports = {
  globDirectory: 'build/',

  globPatterns: [
    'dist/**/*.js',
    'images/**/*.{ico,png}',
    'index.html',
    'manifest.json',
    'robots.txt',
  ],

  swDest: 'build/sw.js',
  swSrc: 'public/serviceWorker.js',
};
