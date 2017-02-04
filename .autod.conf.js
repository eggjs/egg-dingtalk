'use strict';

module.exports = {
  write: true,
  prefix: '^',
  test: [
    'test',
    'benchmark',
  ],
  devdep: [
    'egg',
    'node-dingtalk',
    'egg-ci',
    'egg-bin',
    'autod',
    'eslint',
    'eslint-config-egg',
    'supertest',
  ],
  exclude: [
    './test/fixtures',
  ],
};

