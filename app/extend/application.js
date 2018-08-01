'use strict';

const DINGTALK = Symbol('Application#dingtalk');
const DingTalk = require('node-dingtalk');

module.exports = {
  createDingtalkClient(options) {
    return new DingTalk(Object.assign({
      urllib: this.httpclient,
    }, this.config.dingtalk, options));
  },

  /**
   * dingtalk
   * @member Application#dingtalk
   */
  get dingtalk() {
    if (!this[DINGTALK]) {
      this[DINGTALK] = this.createDingtalkClient(this.config.dingtalk);
    }
    return this[DINGTALK];
  },
};
