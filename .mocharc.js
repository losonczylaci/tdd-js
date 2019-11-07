'use strict';

module.exports = {
  diff: true,
  extension: ['js'],
  opts: false,
  package: './package.json',
  reporter: 'spec',
  recursive: true,
  slow: 75,
  timeout: 2000,
  ui: 'bdd',
  spec: '**/test/*.spec.js',
  ignore: 'node_modules/**'
};