'use strict';

module.exports = app => {
  app.get('/', function* () {
    this.body = yield this.app.dingtalk.user.list('1', true);
  });
};
