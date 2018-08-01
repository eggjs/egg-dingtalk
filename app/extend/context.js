'use strict';

const DINGTALK = Symbol('Context#dingtalk');

module.exports = {
  createDingtalkClient(options) {
    const opts = Object.assign({
      urllib: this.httpclient,
    }, this.app.config.dingtalk, options);
    if (this.app.config.dingtalk.enableContextLogger) {
      opts.logger = this.logger;
    }
    return this.app.createDingtalkClient(opts);
  },

  /**
   * dingtalk
   * @member Context#dingtalk
   */
  get dingtalk() {
    if (!this[DINGTALK]) {
      this[DINGTALK] = this.createDingtalkClient();
    }
    return this[DINGTALK];
  },
};
