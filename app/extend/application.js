'use strict';

const DINGTALK = Symbol('Application#dingtalk');
const DingTalk = require('node-dingtalk');

module.exports = {
  /**
   * dingtalk
   * @member Application#dingtalk
   */
  get dingtalk() {
    if (!this[DINGTALK]) {
      const options = Object.assign({}, this.config.dingtalk);
      options.urllib = this.httpclient;
      this[DINGTALK] = new DingTalk(options);
    }
    return this[DINGTALK];
  },
};
