'use strict';

module.exports = app => {
  app.get('/ctx', async ctx => {
    ctx.body = await ctx.dingtalk.user.list('1', true);
  });
};
