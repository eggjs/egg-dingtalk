# egg-dingtalk

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-dingtalk.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-dingtalk
[travis-image]: https://img.shields.io/travis/eggjs/egg-dingtalk.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-dingtalk
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-dingtalk.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-dingtalk?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-dingtalk.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-dingtalk
[snyk-image]: https://snyk.io/test/npm/egg-dingtalk/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-dingtalk
[download-image]: https://img.shields.io/npm/dm/egg-dingtalk.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-dingtalk

egg plugin for [dingtalk](http://www.dingtalk.com)

## Install

```bash
$ npm i egg-dingtalk --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.dingtalk = {
  enable: true,
  package: 'egg-dingtalk',
};

// {app_root}/app/controller/test.js
exports.list = async ctx => {
  ctx.body = await ctx.dingtalk.user.list('1', true);
};
```

## Configuration
```js
// {app_root}/config/config.default.js
exports.dingtalk = {
  corpid: '',
  corpsecret: '',
  host: '',
  enableContextLogger: '',
};
```

## Feature

- https://open-doc.dingtalk.com/
- https://github.com/ali-sdk/node-dingtalk

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
