'use strict';

module.exports = {
  mockDingtalkRequest(clazzName, methodName, fn) {
    const clazz = require(`node-dingtalk/lib/api/${clazzName}`);
    this.mm(clazz.prototype, methodName, fn);
  },

  mockDingtalkRequestData(clazzName, methodName, data) {
    const clazz = require(`node-dingtalk/lib/api/${clazzName}`);
    this.mm.data(clazz.prototype, methodName, data);
  },
};
