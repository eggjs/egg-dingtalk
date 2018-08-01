'use strict';

const mm = require('egg-mock');
const assert = require('assert');

describe('test/dingtalk.test.js', () => {
  let app;
  before(async () => {
    app = mm.app({
      baseDir: 'dingtalk',
    });
    await app.ready();
  });

  afterEach(mm.restore);

  it('app.dingtalk', () => {
    assert(app.dingtalk);
  });

  describe('get app.dingtalk', () => {
    it('should work with mockDingtalkRequest', async () => {
      app.mockDingtalkRequest('user', 'list', async () => {
        return {
          userlist: [],
        };
      });
      const res = await app.httpRequest().get('/');
      assert(res.status === 200);
      assert(res.body.userlist);
      assert(res.body.userlist.length === 0);
    });

    it('should work with mockDingtalkRequestData', async () => {
      app.mockDingtalkRequestData('user', 'list', {
        userlist: [{ name: 'user-13444444180', userid: '13444444180' }],
      });
      const res = await app.httpRequest().get('/');
      assert(res.status === 200);
      assert(res.body.userlist);
      assert(res.body.userlist.length === 1);
    });

    it('list user', async () => {
      const res = await app.httpRequest().get('/');
      assert(res.status === 200);
      assert(res.body.userlist.length > 0);
      // console.log('%j', res.body);
    });
  });

  describe('get ctx.dingtalk', () => {
    it('should work with mockDingtalkRequest', async () => {
      app.mockDingtalkRequest('user', 'list', async () => {
        return {
          userlist: [],
        };
      });
      const res = await app.httpRequest().get('/ctx');
      assert(res.status === 200);
      assert(res.body.userlist);
      assert(res.body.userlist.length === 0);
    });

    it('should work with mockDingtalkRequestData', async () => {
      app.mockDingtalkRequestData('user', 'list', {
        userlist: [{ name: 'user-13444444180', userid: '13444444180' }],
      });
      const res = await app.httpRequest().get('/ctx');
      assert(res.status === 200);
      assert(res.body.userlist);
      assert(res.body.userlist.length === 1);
    });

    it('list user', async () => {
      const res = await app.httpRequest().get('/ctx');
      assert(res.status === 200);
      assert(res.body.userlist.length > 0);
      // console.log('%j', res.body);
    });

    it('list users and departments', async () => {
      const res = await app.httpRequest().get('/ctx-departments');
      assert(res.status === 200);
      assert(res.body.users.userlist.length > 0);
      assert(res.body.departments.department.length > 0);
      // console.log('%j', res.body);
    });
  });
});
