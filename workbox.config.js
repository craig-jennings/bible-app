module.exports = {
  globDirectory: 'build/',
  globPatterns: ['images/**/*.{ico,png}', 'index.html', 'manifest.json', 'robots.txt'],
  swDest: 'build/sw.js',
  swSrc: 'src/serviceWorker.js',
};
