'use strict';

module.exports = app => {
  app.get('/', async ctx => {
    ctx.body = await ctx.app.dingtalk.user.list('1', true);
  });

  app.get('/ctx', async ctx => {
    ctx.body = await ctx.dingtalk.user.list('1', true);
  });

  app.get('/ctx-departments', async ctx => {
    const users = await ctx.dingtalk.user.list('1', true);
    const departments = await ctx.dingtalk.department.list();
    ctx.body = { users, departments };
  });
};
