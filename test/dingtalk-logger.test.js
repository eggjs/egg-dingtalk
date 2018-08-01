'use strict';

const mm = require('egg-mock');
const assert = require('assert');

describe('test/dingtalk-logger.test.js', () => {
  let app;
  before(async () => {
    app = mm.app({
      baseDir: 'dingtalk-logger',
    });
    await app.ready();
  });

  afterEach(mm.restore);

  describe('get ctx.dingtalk', () => {
    it('list user', async () => {
      const res = await app.httpRequest().get('/ctx');
      assert(res.status === 200);
      assert(res.body.userlist.length > 0);
      // includes('[node-dingtalk:client:request:response]')
      // console.log('%j', res.body);
    });
  });
});
