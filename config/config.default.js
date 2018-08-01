'use strict';

/**
 * 钉钉配置
 * @member Config#dingtalk
 * @property {String} corpid - 企业ID
 * @property {String} corpsecret - 企业秘钥
 * @property {String} host - 服务地址
 * @property {Boolean} enableContextLogger - 是否使用 ctx.logger 记录所有 dingtalk 请求结果
 * @see https://ddtalk.github.io/dingTalkDoc
 */
exports.dingtalk = {
  host: 'https://oapi.dingtalk.com',
  corpid: '',
  corpsecret: '',
  requestOpts: {
    timeout: 10000,
  },
  enableContextLogger: false,
};
