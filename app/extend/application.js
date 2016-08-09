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
      const options = Object.assign({
        urllib: this.urllib,
      }, this.config.dingtalk);

      this[DINGTALK] = new DingTalk(options);
    }
    return this[DINGTALK];
  },
};
