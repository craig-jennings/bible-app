/* eslint-disable import/no-extraneous-dependencies */
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsConfig from './tsconfig.json';

function generateAliases() {
  const { paths } = tsConfig.compilerOptions;
  const aliases = {};

  Object.entries(paths).forEach(([key, value]) => {
    const alias = key.replace('/*', '');
    const filepath = value[0].replace('/*', '');

    aliases[alias] = path.resolve(__dirname, filepath);
  });

  return aliases;
}

/**
 * @type {import('vite').UserConfig}
 */
export default {
  build: {
    outDir: 'build',
    polyfillDynamicImport: false,
    target: 'es2018',
  },

  esbuild: {
    jsxInject: `import React from 'react'`,
  },

  plugins: [reactRefresh()],

  resolve: {
    alias: generateAliases(),
  },

  server: {
    host: '0.0.0.0',
  },
};
