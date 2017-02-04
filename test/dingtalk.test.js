'use strict';

const request = require('supertest');
const mm = require('egg-mock');
const assert = require('assert');

describe('test/dingtalk.test.js', () => {

  let app;
  before(function* () {
    app = mm.app({
      baseDir: 'dingtalk',
    });
    yield app.ready();
  });

  afterEach(mm.restore);

  it('app.dingtalk', function* () {
    assert(app.dingtalk);
  });

  describe('api', () => {
    it('list user', function* () {
      const result = yield request(app.callback()).get('/');
      assert(result.body.userlist.length > 0);
      console.log('%j', result.body);
    });
  });
});
